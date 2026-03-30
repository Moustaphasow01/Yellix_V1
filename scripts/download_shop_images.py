from __future__ import annotations

from pathlib import Path
import re
import shutil
import time
import urllib.request


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "src/data/shop.ts"
OUT_DIR = ROOT / "public/shop/products"

category_terms = {
    "telecommunications": ["network", "industrial", "telecom"],
    "energie": ["energy", "solar", "power"],
    "agriculture": ["agriculture", "field", "irrigation"],
    "elevage": ["livestock", "farm", "control"],
    "maintenance-terrain": ["technician", "tool", "field"],
    "kits-pro": ["kit", "bundle", "system"],
    "pieces-consommables": ["accessory", "cable", "connector"],
}

patterns = [
    ("routeur-industriel", ["router", "industrial", "network"]),
    ("switch-manageable", ["switch", "network", "rack"]),
    ("point-acces", ["wifi", "accesspoint", "outdoor"]),
    ("coffret-reseau", ["network", "cabinet", "industrial"]),
    ("module-sfp", ["fiber", "optic", "network"]),
    ("antenne-directionnelle", ["antenna", "wireless", "radio"]),
    ("panneau-solaire", ["solar", "panel", "photovoltaic"]),
    ("onduleur-hybride", ["inverter", "solar", "battery"]),
    ("batterie-lithium", ["battery", "storage", "power"]),
    ("coffret-protection", ["electrical", "cabinet", "protection"]),
    ("regulateur-mppt", ["solar", "controller", "charge"]),
    ("convertisseur-pur-sinus", ["inverter", "power", "dcac"]),
    ("pompe-solaire", ["pump", "water", "solar"]),
    ("controleur-irrigation", ["irrigation", "controller", "field"]),
    ("capteur-humidite", ["sensor", "soil", "agriculture"]),
    ("station-meteo", ["weather", "station", "field"]),
    ("coffret-irrigation", ["irrigation", "cabinet", "control"]),
    ("passerelle-capteurs", ["gateway", "sensor", "lorawan"]),
    ("controleur-ventilation", ["ventilation", "controller", "farm"]),
    ("capteur-temperature", ["sensor", "environment", "farm"]),
    ("alimentation-secours", ["backup", "power", "supply"]),
    ("systeme-abreuvement", ["watering", "livestock", "system"]),
    ("multimetre", ["multimeter", "measurement", "tool"]),
    ("testeur-reseau", ["network", "tester", "cable"]),
    ("coffret-mobile", ["toolbox", "field", "case"]),
    ("epi", ["safety", "equipment", "protection"]),
    ("cable-rj45", ["ethernet", "cable", "connector"]),
    ("connecteur", ["connector", "cable", "accessory"]),
    ("serre-cables", ["cable", "ties", "accessory"]),
    ("kit-solaire", ["solar", "kit", "power"]),
    ("kit-reseau", ["network", "kit", "rack"]),
    ("kit-irrigation", ["irrigation", "kit", "pump"]),
    ("kit-continuite", ["backup", "power", "kit"]),
]

stopwords = {
    "le",
    "la",
    "les",
    "de",
    "du",
    "des",
    "et",
    "a",
    "au",
    "aux",
    "sur",
    "pour",
    "with",
    "mesh",
    "compact",
    "pro",
    "terrain",
}


def normalize_token(token: str) -> str:
    token = token.lower().replace("&", "")
    token = re.sub(r"[^a-z0-9]+", "", token)
    return token


def build_terms(slug: str, name: str, category: str, subcategory: str) -> list[str]:
    terms: list[str] = []
    terms.extend(category_terms.get(category, []))
    source = f"{slug} {name} {subcategory}".lower()
    for pattern, keywords in patterns:
        if pattern in source:
            terms.extend(keywords)
            break
    for raw in re.findall(r"[A-Za-z0-9]+", name):
        token = normalize_token(raw)
        if token and token not in stopwords and len(token) > 2:
            terms.append(token)
    seen: set[str] = set()
    clean: list[str] = []
    for term in terms:
        term = normalize_token(term)
        if not term or term in seen or term in stopwords:
            continue
        seen.add(term)
        clean.append(term)
    return clean[:4]


def main() -> None:
    text = DATA_FILE.read_text(encoding="utf-8")
    blocks = re.findall(r"createProduct\(\{(.*?)\n\s*\}\),", text, re.S)
    products = []
    for block in blocks:
        slug = re.search(r'slug: "([^"]+)"', block).group(1)
        name = re.search(r'name: "([^"]+)"', block).group(1)
        category = re.search(r'categorySlug: "([^"]+)"', block).group(1)
        subcategory = re.search(r'subcategory: "([^"]+)"', block).group(1)
        products.append((slug, name, category, subcategory))

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for index, (slug, name, category, subcategory) in enumerate(products, start=1):
        terms = build_terms(slug, name, category, subcategory)
        query = ",".join(terms) if terms else "industrial"
        dest = OUT_DIR / f"{slug}.jpg"
        urls = [
            f"https://loremflickr.com/1200/900/{query}?lock={slug}",
            f"https://picsum.photos/seed/{slug}/1200/900",
        ]
        last_error: Exception | None = None
        for url in urls:
            try:
                with urllib.request.urlopen(url, timeout=30) as response, open(dest, "wb") as output:
                    shutil.copyfileobj(response, output)
                print(f"[{index}/{len(products)}] {slug} -> {query}")
                break
            except Exception as exc:  # pragma: no cover - network dependent
                last_error = exc
        else:
            raise RuntimeError(f"Failed for {slug}: {last_error}")

        time.sleep(0.15)


if __name__ == "__main__":
    main()
