/**
 * Innhold for den nye forsiden (`/ny-forside`).
 *
 * Alt av tekst ligger her slik at det er enkelt å justere budskapet uten å
 * røre markup. Når innholdet er godkjent kan dette flyttes inn i Sanity.
 *
 * ⚠️ TALL MERKET MED «verifiser» MÅ KVALITETSSIKRES FØR PUBLISERING.
 */

export type Cta = {
  label: string;
  href: string;
  external?: boolean;
};

export const hero = {
  eyebrow: 'Data engineering · AI · Utvikling',
  heading: 'Vi bygger dataplattformene og AI-løsningene Norge stoler på',
  lead: 'Kodio er et konsulentmiljø av seniorutviklere og arkitekter. Vi går inn i teamene deres, tar ansvar for leveransen og setter løsninger i produksjon — ikke i en PowerPoint.',
  primaryCta: {
    label: 'Book en uforpliktende prat',
    href: 'mailto:hei@kodio.no?subject=Foresp%C3%B8rsel%20om%20konsulentbistand',
    external: true,
  } satisfies Cta,
  secondaryCta: {
    label: 'Se hva vi har levert',
    href: '#kundecase',
  } satisfies Cta,
  stats: [
    // verifiser: antall hentet fra employee-dokumentene i Sanity (sep. 2025)
    { value: '21', label: 'seniorkonsulenter' },
    // verifiser
    { value: '12 år', label: 'snitt erfaring per konsulent' },
    // verifiser: antall logoer i kundelisten
    { value: '16+', label: 'virksomheter digitalisert' },
    // verifiser
    { value: '2 uker', label: 'typisk tid til oppstart' },
  ],
};

export const logoWall = {
  heading: 'Vi leverer til noen av Norges mest datatunge virksomheter',
};

export type Service = {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  deliverables: string[];
  stack: string[];
};

export const services = {
  eyebrow: 'Tjenester',
  heading: 'Tre områder vi kan bedre enn de fleste',
  intro:
    'Vi selger ikke timer på måfå. Vi tar oppdrag der data, AI og solid ingeniørhåndverk faktisk avgjør om løsningen blir tatt i bruk.',
  items: [
    {
      id: 'data-engineering',
      eyebrow: '01',
      heading: 'Data engineering & dataplattform',
      description:
        'Vi bygger datagrunnlaget resten av virksomheten hviler på: pålitelige pipelines, styrbare datamodeller og plattformer som tåler at flere team bygger på dem samtidig.',
      deliverables: [
        'Moderne dataplattform i sky, fra grunnen eller som modernisering av eksisterende',
        'Batch- og strømmepipelines med overvåking, alarmer og datakvalitetstester',
        'Dimensjonsmodellering og semantiske lag som forretningen faktisk forstår',
        'Datastyring, sporbarhet og etterlevelse av GDPR og sektorkrav',
        'Kostnadskontroll — vi rydder like gjerne som vi bygger nytt',
      ],
      stack: [
        'Databricks',
        'Snowflake',
        'BigQuery',
        'dbt',
        'Apache Kafka',
        'Airflow',
        'Spark',
        'Terraform',
        'Azure · AWS · GCP',
      ],
    },
    {
      id: 'ai',
      eyebrow: '02',
      heading: 'AI & maskinlæring i produksjon',
      description:
        'De fleste har prøvd en pilot. Vi er de som tar den siste, vanskelige biten: å sette modellen i drift med målbar effekt, kontroll på risiko og en eier som sover godt om natten.',
      deliverables: [
        'Fra proof of concept til produksjonssatt tjeneste med SLA og eierskap',
        'RAG- og LLM-løsninger på egne data, med evaluering og kildesporing',
        'Prediksjons- og prognosemodeller: frafall, etterspørsel, avvik og risiko',
        'MLOps: versjonering, gjenkjøring, drift-overvåking og retrening',
        'Ansvarlig AI — rammeverk, dokumentasjon og forberedelse til AI-forordningen',
      ],
      stack: [
        'Azure OpenAI',
        'Vertex AI',
        'Amazon Bedrock',
        'PyTorch',
        'scikit-learn',
        'MLflow',
        'LangGraph',
        'Vektordatabaser',
      ],
    },
    {
      id: 'utvikling',
      eyebrow: '03',
      heading: 'Produkt- og systemutvikling',
      description:
        'Seniorutviklere og arkitekter som tar ende-til-ende-ansvar: fra API og domenemodell til frontend, testregime og driftssetting. Vi etterlater kode teamet deres klarer å eie videre.',
      deliverables: [
        'Nye digitale tjenester og produkter, fra idé til lansering',
        'Modernisering og avvikling av monolitter — uten stopp i leveransene',
        'Systemarkitektur, integrasjoner og API-plattform',
        'Plattform- og DevOps-arbeid som korter ned ledetid til produksjon',
        'Teamcoaching og teknisk ledelse når kapasiteten er der, men farten mangler',
      ],
      stack: [
        'TypeScript',
        'React',
        'Kotlin',
        'Java',
        '.NET',
        'Python',
        'Go',
        'Kubernetes',
        'PostgreSQL',
      ],
    },
  ] satisfies Service[],
};

export const engagement = {
  eyebrow: 'Slik kan du kjøpe oss',
  heading: 'Tre måter å komme i gang på',
  intro:
    'Vi tilpasser oss innkjøpsformen deres — enkeltkonsulent på rammeavtale, komplett tverrfaglig team, eller et kort rådgivningsløp før dere binder dere til noe.',
  items: [
    {
      heading: 'Konsulent inn i teamet ditt',
      description:
        'Én eller flere seniorer inn i et eksisterende team. Du beholder styringen, vi tilfører kapasitet og spisskompetanse fra dag én.',
      details: ['Fra 20 % til 100 % stilling', 'Vanligvis oppstart innen 2 uker', 'Timepris'],
    },
    {
      heading: 'Team med leveranseansvar',
      description:
        'Vi setter sammen et tverrfaglig team med teknisk lead, og tar ansvar for at det blir levert. Godt egnet når du mangler både kapasitet og kapasitet til å lede.',
      details: ['3–7 personer', 'Avtalt leveranseomfang', 'Fast pris eller mål-pris'],
    },
    {
      heading: 'Rådgivning & forprosjekt',
      description:
        'Et kort, avgrenset løp der vi kartlegger dagens situasjon og leverer en anbefaling du kan ta med til styret. Ingen bindinger etterpå.',
      details: ['2–6 uker', 'Arkitektur- eller AI-vurdering', 'Fast pris'],
    },
  ],
};

export type CaseStudy = {
  eyebrow: string;
  heading: string;
  description: string;
  outcomes: string[];
  href: string;
};

export const cases = {
  eyebrow: 'Kundecase',
  heading: 'Resultater, ikke referanseprosjekter på papiret',
  intro: 'Et utvalg av oppdrag vi har levert. Vi stiller gjerne med referanser du kan ringe.',
  items: [
    {
      eyebrow: 'Felleskjøpet · Sky & plattform',
      heading: 'Felleskjøpet gjenforenes i skyen',
      description:
        'Vi samlet spredte systemer på én skyplattform, slik at data og tjenester kunne deles på tvers av selskapene i konsernet.',
      outcomes: ['Skymigrering', 'Plattform & integrasjoner', 'Fullstack'],
      href: '/felleskjopet-gjenforenes-i-skyen',
    },
    {
      eyebrow: 'Aller Media · Data',
      heading: 'Forbrukerdata gjort sexy',
      description:
        'Vi gjorde tunge forbrukerdatasett tilgjengelige og forståelige, slik at innsikten faktisk kunne brukes i beslutninger.',
      outcomes: ['Datamodellering', 'Innsikt & visualisering', 'Fullstack'],
      href: '/forbrukerdata-gjort-sexy',
    },
    {
      eyebrow: 'NAV IT · Tjenesteutvikling',
      heading: 'NAV rustes for fremtiden',
      description:
        'Tjenesteutvikling og teamcoaching i en av landets største IT-organisasjoner, med krav til sikkerhet, tilgjengelighet og skala.',
      outcomes: ['Offentlig sektor', 'Teamcoaching', 'Tjenesteutvikling'],
      href: '/nav-teamcoaching',
    },
    {
      eyebrow: 'Flyr · Produktutvikling',
      heading: 'Vi gjorde Flyr klare for take-off',
      description:
        'Fra tomt repo til en app i markedet på kort tid — bygget sammen med kunden under et hardt tidspress.',
      outcomes: ['Frontend', 'Time-to-market', 'Produktutvikling'],
      href: '/flyr',
    },
  ] satisfies CaseStudy[],
};

export const why = {
  eyebrow: 'Hvorfor Kodio',
  heading: 'Det du egentlig lurer på før du signerer',
  items: [
    {
      heading: 'Kun seniorer — ingen skjulte juniorer',
      description:
        'Konsulenten du intervjuer er konsulenten du får. Vi bemanner ikke oppdrag med folk som skal lære faget på din regning.',
    },
    {
      heading: 'Ingen underleverandørkjede',
      description:
        'Alle hos oss er fast ansatt i Kodio. Det betyr én avtalepart, ett ansvarsforhold og ingen påslag i flere ledd.',
    },
    {
      heading: 'Vant til krav og revisjon',
      description:
        'Vi har levert til finans, samferdsel, forsvar og offentlig sektor. Sikkerhetsregimer, GDPR og anskaffelsesprosesser er kjent terreng.',
    },
    {
      heading: 'Vi bygger for at dere skal overta',
      description:
        'Dokumentasjon, tester og kunnskapsoverføring er en del av leveransen. Målet er at dere skal klare dere uten oss.',
    },
    {
      heading: 'Lav turnover',
      description:
        'Folka våre blir. Det gir kontinuitet i oppdragene og betyr at kompetansen om systemene deres ikke forsvinner ut døra. ', // verifiser gjerne med faktisk turnover-tall
    },
    {
      heading: 'Vi sier fra når vi mener du tar feil',
      description:
        'Vi er ikke ja-mennesker på timepris. Får vi en bestilling vi ikke tror på, sier vi det — før vi fakturerer for den.',
    },
  ],
};

export const contact = {
  eyebrow: 'Ta kontakt',
  heading: 'Har du et behov vi bør se på?',
  lead: 'Send noen linjer om utfordringen, så svarer vi innen én arbeidsdag med hvem hos oss som passer — eller sier ifra hvis vi ikke er rett leverandør.',
  points: [
    'Uforpliktende prat på 30 minutter',
    'CV-er og referanser innen få dager',
    'Vi svarer også på rammeavtaler og anbud',
  ],
  primaryCta: {
    label: 'Send oss en e-post',
    href: 'mailto:hei@kodio.no?subject=Foresp%C3%B8rsel%20om%20konsulentbistand',
    external: true,
  } satisfies Cta,
  secondaryCta: {
    label: 'Bli kjent med folka',
    href: '/folka',
  } satisfies Cta,
  person: {
    name: 'Kristiane',
    role: 'Head of Growth',
    email: 'kristiane@kodio.no',
  },
  general: {
    email: 'hei@kodio.no',
  },
};
