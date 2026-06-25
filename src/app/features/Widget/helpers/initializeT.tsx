import { CompanyRegistrationErrorProps } from '../../../domains/Company/components/CompanyRegistrationError/CompanyRegistrationError'
import { CompanyRegistrationFormProps } from '../../CompanyRegistrationForm/CompanyRegistrationForm'
import { CompanyRegistrationSuccessProps } from '../../../domains/Company/components/CompanyRegistrationSuccess/CompanyRegistrationSuccess'
import React from 'react'
import { mergeNestedObjects } from '../../../utils/nestedObjects'

export interface WidgetTranslations {
  companyRegistrationForm: CompanyRegistrationFormProps['t']
  companyRegistrationSuccess: CompanyRegistrationSuccessProps['t']
  companyRegistrationError: CompanyRegistrationErrorProps['t']
}

const DEFAULT_TRANSLATIONS: WidgetTranslations = {
  companyRegistrationForm: {
    packageSelectForm: {
      companySizes: [
        '1-3 salonger',
        '4-6 salonger',
        '7-10 salonger',
        '10+ salonger',
        '50+ salonger'
      ],
      packages: [
        {
          objectId: 'MAD_START', // 'MAD_START' | 'MAD_PRO' | 'MAD_ENTERPRISE'
          name: 'Start',
          prefix: 'MAD',
          nameColor: '#ff6172',
          description:
            'Kom i gang med Kontrollsenter\n og skap fokus med app for de ansatte.',
          prices: [490, 440, 390, 340, 290],
          period: '/ mnd per salong',
          priceCaption: 'Gratis første måned',
          periodKey: 'MONTHLY', // 'MONTHLY' | 'YEARLY'
          inherits: null,
          functions: [
            {
              name: 'Kontrollsenter (live KPI og budsjett)',
              url: 'https://www.madsoftware.no/kontrollsenter'
            },
            {
              name: 'Ansatt app (mål, KPI og lønn live)',
              url: 'https://www.madsoftware.no/ansatt-app'
            }
          ],
          outroText: 'En enklere vei til bedre drift',
          detailsText: 'Se detaljer',
          detailsModalParagraphs: [
            'MAD Start. Få full kontroll og fokusert team.\n\nFå full oversikt over hva som skjer i salongen, og skap fokus i teamet uten ekstra arbeid.',
            'Oversikt og kontroll\n• Live KPI-oversikt (rebooking, mersalg, osv.)\n• Se utvikling på nøkkeltall\n• Forstå hva som faktisk driver omsetning',
            'Ansatt app\n• Hver ansatt ser egne tall live\n• KPI-status med fargekoder\n• Lønn og utvikling i sanntid',
            'Enkelt å komme i gang\n• Kobles til systemene du allerede bruker\n• Ingen manuelt arbeid\n• Klar på kort tid',
            'Passer for deg som\n• vil få kontroll på tallene\n• vil skape mer fokus i hverdagen\n• vil komme raskt i gang'
          ],
          caption: '5 brukere inkludert per salong\n + 69 kr per ekstra bruker',
          action: { isFree: true, text: 'Start gratis' }
        },
        {
          objectId: 'MAD_PRO', // 'MAD_START' | 'MAD_PRO' | 'MAD_ENTERPRISE'
          name: 'Pro',
          prefix: 'MAD',
          nameColor: '#1bc672',
          description: 'For salonger som vil skape vekst\n og engasjement',
          prices: [1290, 1240, 1190, 1140, 1090],
          period: '/ mnd per salong',
          priceCaption: 'Gratis første måned',
          periodKey: 'MONTHLY', // 'MONTHLY' | 'YEARLY'
          inherits: 'Alt i Start',
          functions: [
            {
              name: 'Poeng, troféer og belønninger',
              url: 'https://www.madsoftware.no/mad-play'
            },
            {
              name: 'Konkurranser for frisører og team',
              url: 'https://www.madsoftware.no/the-game'
            },
            {
              name: 'Premier gjennom MAD',
              url: 'https://www.madsoftware.no/trofejakten'
            }
          ],
          outroText: 'Mer fokus. Bedre resultater.',
          detailsText: 'Se detaljer',
          detailsModalParagraphs: [
            'MAD Pro. Det de fleste starter med.\n\nHer får du det som faktisk skaper utvikling i salongen. Spar tid på oppfølging og rapportering, samtidig som teamet motiveres til å nå salongens mål på en helt ny måte.',
            'Alt i Start\n• Full KPI-oversikt og ansatt app\n• Budsjett, mål og live tall\n\nAlltid oppdatert, uten manuelt arbeid',
            'Rapporter og innsikt\n• Ferdige rapporter på sekunder\n• Full oversikt for deg og dine ledere\n• Slipper timevis med manuelt arbeid',
            'Motivasjon som fungerer\n• Poengsystem koblet til prestasjon\n• Troféer når mål nås\n• Synlig progresjon for hver ansatt\n\nGjør at de ansatte faktisk bryr seg om tallene',
            'Konkurranser og driv\n• Interne konkurranser i teamet\n• Rangeringer og ligaer\n• Fokus på det som gir resultater\n\nSkaper energi og retning i hverdagen',
            'Premier og belønning\n• Mulighet til å vinne premier\n• Kobler innsats til belønning\n• Gjør det motiverende å prestere',
            'Passer for deg som\n• vil øke omsetning per kunde\n• vil ha mer engasjerte ansatte\n• vil skape driv og retning i salongen'
          ],
          caption: '5 brukere inkludert per salong\n + 69 kr per ekstra bruker',
          action: { isFree: true, text: 'Start gratis' },
          badgeText: 'Mest populær',
          badgeVariant: 'warning'
        },
        {
          objectId: 'MAD_ENTERPRISE', // 'MAD_START' | 'MAD_PRO' | 'MAD_ENTERPRISE'
          name: 'Max',
          prefix: 'MAD',
          nameColor: '#ffb637',
          description:
            'For salonger som vil\n optimalisere drift og lønnsomhet',
          prices: [2990, 2940, 2890, 2840, 2590],
          period: '/ mnd per salong',
          periodKey: 'MONTHLY', // 'MONTHLY' | 'YEARLY'
          inherits: 'Alt i Pro',
          functions: [
            {
              name: 'Autolønn',
              url: 'https://www.madsoftware.no/autolonn'
            },
            {
              name: 'Flexipris',
              url: 'https://www.madsoftware.no/flexipris'
            },
            {
              name: 'Reklamasjonsverktøy',
              url: 'https://www.madsoftware.no/reklamasjonsverktoy'
            }
          ],
          outroText: 'Full kontroll og maksimal lønnsomhet.',
          detailsText: 'Se detaljer',
          detailsModalParagraphs: [
            'MAD Max. Full kontroll på drift, maks motivasjon og økt lønnsomhet med Automlønn.\n\nFor salonger som vil optimalisere hele driften og få mest mulig ut av hver time.',
            'Alt i Pro\n• Motivasjon, konkurranser og vekstsystem\n• Full oversikt og kontroll',
            'Autolønn\n• Automatisk lønnsberegning (klart og ferdig til utbetaling)\n• Full oversikt uten manuelt arbeid\n• Kjør lønn på minutter\n• Spar tid og unngå feil',
            'Flexipris\n• Juster priser basert på kapasitet\n• Øk omsetning på ledige timer\n• Bedre utnyttelse av dagen',
            'Reklamasjonsverktøy\n• Full oversikt på reklamasjoner\n• Strukturert oppfølging\n• Bedre kontroll og kvalitet',
            'Passer for deg som\n• vil optimalisere drift og lønnsomhet\n• vil spare tid på administrasjon\n• vil ha full kontroll på hele virksomheten'
          ],
          caption:
            '10 brukere inkludert per salong\n + 69 kr per ekstra bruker',
          action: { isFree: false, text: 'Ta kontakt' },
          badgeText: 'Høy lønnsomhet',
          badgeVariant: 'dark'
        }
      ],
      title: 'Gjør det litt mer MAD. Få bedre resultater.',
      subtitle: 'Ingen binding. Ingen oppstarts-kost. Ingen stress.',
      pricesDescription: 'Alle priser er oppgitt ekskl. mva',
      currency: 'Kr',
      promoCode: {
        placeholder: 'Skriv inn rabattkode',
        applyButton: 'Bruk',
        notFoundError: 'Rabattkoden ble ikke funnet',
        removeButton: '✕'
      }
    },
    companyCredentialsForm: {
      title: 'Opprett kontoen din',
      caption: <>Siste steg</>,
      fullNamePlaceholder: 'Ditt navn',
      emailPlaceholder: 'E-postadresse',
      passwordPlaceholder: 'Velg passord',
      termsPlaceholder: 'Jeg har lest og godtar',
      termsLabel: 'vilkårene og betingelsene.',
      termsLink: 'https://www.madsoftware.no/standardvilkar'
    },
    companyCredentialsFormErrors: {
      emailRequired: 'E-post er påkrevet',
      emailInvalid: 'E-posten er ugyldig',
      fullNameRequired: 'Fullt navn er påkrevet',
      passwordRequired: 'Passord er påkrevet',
      passwordToShort: 'Passordet må være minst 6 tegn langt',
      termsAccepted: 'Du må akseptere vilkårene'
    },
    companyDetailsFormErrors: {
      companyRequired: 'Firma er påkrevd',
      posProviderRequired: 'POS-leverandør er påkrevd',
      posProviderNameRequired: 'Navn på POS-leverandør er påkrevd'
    },
    companyDetailsForm: {
      title: 'Opprett din bedriftsprofil på under 2 minutter',
      caption: (
        <div style={{ textAlign: 'left' }}>
          ✓ Gratis tilgang til MAD Pro i 30 dager
          <br />✓ Ingen bytte av kassasystem
          <br />✓ Avslutt når som helst i prøveperioden
        </div>
      ),
      companySelect: {
        selectPlaceholder: 'Finn din salong',
        organizationNumber: 'Orgnr:',
        noData: 'Firma ikke funnet'
      },
      posProviderSelect: {
        posProviders: {
          fixitOnline: 'Fixit Online',
          com2gether: 'Com2gether',
          easyUpdate: 'Easy Update',
          egHano: 'EG Hano',
          handelsdata: 'Handelsdata',
          norskButikkdata: 'Norsk Butikkdata',
          sharpWellness: 'Sharp Wellness',
          suppler: 'Supplèr',
          timma: 'Timma',
          touchSoft: 'Touch Soft',
          other: 'Annet'
        },
        selectPlaceholder: 'Velg kassasystem',
        otherPlaceholder: 'Skriv inn annen kassasystem'
      }
    },
    nextAction: 'Neste',
    submitAction: 'Start gratis',
    resetAction: 'Tilbake',
    formImage:
      'https://cdn.prod.website-files.com/6846900d35050ebd989ab0ea/6852699229e51e449c064c9c_Jente_saccosekk_u_planter.png'
  },
  companyRegistrationSuccess: {
    supportedPosProviders: ['fixitOnline'], // 'fixitOnline', 'com2gether', 'easyUpdate', 'egHano', 'handelsdata', 'norskButikkdata', 'sharpWellness', 'suppler', 'timma', 'touchSoft'
    successMessage: {
      title: 'Bekreft e-post adressen din!',
      messages: [
        'Suksess! Vi har sendt en e-post til {{email}}',
        'Aktiver kontoen din med å trykke på knappen i e-posten',
        'E-posten kommer normalt innen et par minutter.'
      ]
    },
    unhandledPosProviderMessage: {
      title: '🚀 Vi er nesten i gang …',
      messages: [
        'POS-leverandøren din har foreløpig ingen integrasjon med MAD.',
        'Vi har derfor sendt dem en forespørsel med beskjed om at du ønsker å ta i bruk MAD. Du står selvfølgelig på kopi.',
        '',
        'Ønsker du ekstra fremdrift i prosessen, kan du også gjerne kontakte din POS-leverandør og fortelle at du ønsker integrasjon mot MAD.',
        '🚀 Din 30-dagers gratis prøveperiode starter først når datatilgangen er på plass.'
      ]
    }
  },
  companyRegistrationError: {
    title: 'Firma Registreringsfeil',
    continueAction: 'Fortsett',
    messages: {
      userAlreadyExists: [
        'Brukeren finnes allerede. Vennligst prøv en annen e-post.'
      ],
      unexpectedError: [
        'En uventet feil oppstod. Vennligst prøv igjen senere.'
      ],
      companyAlreadyRegistered: [
        'Dette firmaet er allerede registrert. Vennligst sjekk firmadetaljene eller kontakt support.'
      ],
      invalidPromoCode: [
        'Rabattkoden er ikke lenger gyldig. Vennligst fjern den og prøv igjen.'
      ]
    }
  }
}

const initializeT = (t: Partial<WidgetTranslations> = {}) => {
  return mergeNestedObjects<WidgetTranslations>(DEFAULT_TRANSLATIONS, t)
}

export default initializeT
