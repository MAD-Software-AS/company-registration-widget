import { CompanyRegistrationErrorProps } from '../../../domains/Company/components/CompanyRegistrationError/CompanyRegistrationError'
import { CompanyRegistrationFormProps } from '../../CompanyRegistrationForm/CompanyRegistrationForm'
import { CompanyRegistrationSuccessProps } from '../../../domains/Company/components/CompanyRegistrationSuccess/CompanyRegistrationSuccess'
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
          detailsTitle: 'MAD Start detaljer',
          detailsModalParagraphs: [
            'Kontrollsenter (live KPI og budsjett)',
            'Ansatt app (mål, KPI og lønn live)'
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
          detailsTitle: 'MAD Pro detaljer',
          detailsModalParagraphs: [
            'Poeng, troféer og belønninger',
            'Konkurranser for frisører og team',
            'Premier gjennom MAD'
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
          detailsTitle: 'MAD Max detaljer',
          detailsModalParagraphs: [
            'Autolønn',
            'Flexipris',
            'Reklamasjonsverktøy'
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
      fullNamePlaceholder: 'Skriv inn ditt fulle navn',
      emailPlaceholder: 'Skriv inn e-postadressen din',
      passwordPlaceholder: 'Skriv inn ditt passord',
      termsPlaceholder: 'Jeg har lest og godtar',
      termsLabel: 'vilkårene og betingelsene.',
      termsLink: 'https://mads-site-8134d0.webflow.io/standardvilkar'
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
      companySelect: {
        selectPlaceholder: 'Begynn å skrive for å søke etter et firma',
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
        selectPlaceholder: 'Velg POS-leverandør',
        otherPlaceholder: 'Skriv inn annen POS-leverandør'
      }
    },
    nextAction: 'Neste',
    submitAction: 'Registrer',
    resetAction: 'Tilbake',
    subtitle: 'Opprett din bedriftsprofil i bare noen få steg.',
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
      title: '🛰️ Hello Houston …',
      messages: [
        'POS-leverandøren din har foreløpig ingen integrasjon med MAD Software.',
        'Vi har derfor sendt dem en henvendelse med beskjed om at du ønsker at de etablerer datatilgang. Du står selvfølgelig på kopi.',
        '',
        '🚀 Din 30-dagers gratis prøveperiode med superkrefter er satt på pause,',
        'og den starter først når en datatilgang er på plass.'
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
