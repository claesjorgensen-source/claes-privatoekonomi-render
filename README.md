# Claes' privatøkonomi

Enkelt overblik over bankdata, forbrug og oprydning i hverdagsøkonomien.

## Hvad virker nu

- Dansk interaktivt dashboard med klikbare nøgletal
- Rapportcenter med drilldown på udgifter, konti, overførsler og oprydning
- Sidepanel til at gå fra kategori/modtager/konto ned til den enkelte postering
- Hurtig redigering af posteringer direkte i sidepanel
- Udgiftsfokuseret side med største kategorier, steder/modtagere og dyreste poster
- Subscription Radar under Analyser, der grupperer gentagne betalinger i Keep, Review og Cancel candidate uden at ændre data
- Multi-konto CSV-import: vælg flere kontoudtog på én gang, og brug filnavn som konto
- Standardkonti til Sparekassen Kronjylland, bolig, fællesforbrug, sommerhus og fællesbudget
- Smart oprydning af importerede bankposteringer
- Smart Cleanup med tal-neutrale batches, undo og grouped månedsskifte-/kategoriforslag
- Bulk-kategorisering: ret en hel gruppe på én gang og opret regel automatisk
- Automatisk krydstjek af kontooverførsler: matcher minus og plus på tværs af konti og holder sikre flytninger ude af nøgletal uden at omskrive bankposteringer
- Særlig håndtering af interne overførsler, opsparing og investeringer, så de ikke tæller som forbrug eller falsk indkomst
- Indbetalinger til boligkonto, fællesforbrug, sommerhus, budgetkonto, depot og Mastercard behandles som intern funding — kun primær bankkonto tæller som reel indkomstkonto
- Transaktioner med kategorier, noter, relationsfelter og afstemt modpost
- Paginering af posteringstabellen, så store perioder ikke renderer hundredvis af rækker på én gang
- CSV-import fra bankeksport, inkl. fleksibel kolonnemapping og bankfiler uden kolonneoverskrifter
- Simple kategoriseringsregler, fx `netto` → `Dagligvarer`
- Noter kan bruges til at foreslå relationer, fx `lagt ud for Mads` eller `intern overførsel til opsparing`
- Backup/restore via JSON-fil
- PWA/offline-cache
- Enable Banking restricted mode som anbefalet gratis PSD2-sync for egen bankdata
- Lokal CSV folder-sync fra `Documents/Privatøkonomi` uden browserens filvælger
- Forberedelse til GoCardless Bank Account Data / PSD2-sync med Sparekassen Kronjylland som alternativ/fallback
- Lokal Node-backend, så PSD2-nøgler/secrets ikke ligger i browseren
- Ingen bank-login eller MitID-oplysninger gemmes i appen

## Hosted app

Live webapp:

```text
https://claes-privatoekonomi.onrender.com
```

Den hosted app er beskyttet med delt adgangskode og bruger Supabase som server-state. Render-servicen kører fra et saniteret deploy mirror uden bankdata eller secrets; den private source repo og lokal `.data/` forbliver private.

## Kør lokalt

Anbefalet lokalt, fordi udvikling og fallback Bank-sync kan kræve en lokal API-server:

```bash
cd /Users/claes.jorgensen/privat-oekonomi
./scripts/start.sh
```

Alternativt:

```bash
npm start
```

Åbn derefter:

```text
http://localhost:5173
```

Stop serveren:

```bash
./scripts/stop.sh
```

Den gamle statiske måde virker stadig til ren CSV/localStorage, men ikke til Enable Banking, lokal CSV folder-sync eller GoCardless:

```bash
python3 -m http.server 5173
```

## Bedste arbejdsgang efter CSV-import

1. Start på `Overblik` og klik på nøgletal for drilldown.
2. Gå til `Rapporter` for udgifts-, konto-, overførsels- og oprydningsrapporter.
3. Gå til `Oprydning`.
4. Brug `Afstem kontooverførsler` til at matche minus på én konto med plus på en anden.
5. Brug `Kategori-hjælper` til at rydde posteringer i `Andet`.
6. Brug `Opsparing, investering og interne flytninger` til at markere pengeflytninger.
7. Gå til `Udgifter` og se det reelle forbrug.
8. Tilføj noter/relationer på posteringer, hvor CSV’en ikke fortæller hele historien.

## Bank-sync / Open Banking

Anbefalet gratis vej nu er Enable Banking restricted mode:

```text
docs/ENABLE_BANKING_SETUP.md
```

Kort version:

1. Gå til `Bank-sync`.
2. Klik `Generér / vis certifikat`.
3. Upload certifikatet i Enable Banking og opret restricted-mode app.
4. Indsæt `Application ID` i appen.
5. Start MitID-samtykke og synkronisér.

GoCardless findes stadig som fallback, men ser mere B2B/API-key-orienteret ud:

```text
docs/GOCARDLESS_SETUP.md
docs/FREE_BANK_SYNC_OPTIONS.md
```

## Webapp

Koden er nu deployed som webapp med loginbeskyttelse og Supabase state-backend.

Se:

```text
docs/WEBAPP_DEPLOY.md
docs/WEBAPP_PLAN.md
docs/OPEN_BANKING_MCC_ANALYSIS.md
docs/DATA_MODEL.md
docs/supabase_webapp_schema.sql
docs/supabase_schema.sql
render.yaml
```

Enable Banking private key er server-secret, ikke frontend-data.

## Data og privatliv

Hosted data gemmes i Supabase `app_state` som privat server-state og er kun tilgængelig gennem den adgangskodebeskyttede app. Lokalt kan appen stadig bruge browserens `localStorage`/`.data/` afhængigt af backend-konfiguration. Enable Banking privat nøgle ligger kun i `.data/` lokalt og som Render secret i hosted miljø; GoCardless secrets ligger kun i `.env` lokalt, hvis fallback bruges.

Brug `Indstillinger → Eksportér backup` før større ændringer.
