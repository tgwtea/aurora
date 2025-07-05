export default {
  constants: {
    theme: {
      dark: "Dark mode",
      light: "Light mode"
    },
    language: "Language",
    alts: {
      icon: (name) => `Icon: ${name}`,
      logo: (name) => `Logo: ${name}`,
      sti: (name) => `STI: ${name}`,
      photo: (name) => `Photo: ${name}`,
      splash: "Splash screenshot",
      overlay: "Scan overlay"
    },
    labels: {
      comparison: "Service comparison",
      caused: "Caused by",
      symptoms: "Symptoms",
      treatable: "Treatable"
    }
  },
  desktop: {
    navigation: {
      buttons: {
        home: "Home",
        about: "About us",
        resources: "Resources",
        privacy: "Privacy"
      }
    },
    about: {
      title: "About us",
      description: "Aurora is a privacy-first digital platform offering accessible, patient-centric and stigma-free sexual health support. From discreet image-based assessments to at-home testing and virtual consultations, Aurora empowers individuals, especially women and ethnic minorities, to access dignified, bias-mitigated STI care. Aurora brings inclusive, confidential healthcare to underserved communities."
    },
    resources: {
      title: "Most common sexual transmitted infections/diseases",
      description: "Sexually transmitted infections or diseases, are infections that spread primarily through sexual contact, including vaginal, anal, and oral sex. They are a major public health concern worldwide, affecting people of all ages, genders, and sexual orientations. Many STIs can be asymptomatic, meaning individuals may not know they’re infected and can unknowingly transmit the infection to others. Regular testing, safe sex practices, open communication with partners, and early treatment are key to preventing the spread and long-term complications of STIs. Public awareness and education play a crucial role in reducing stigma and encouraging responsible sexual health habits.",
      infections: [{
        name: "Chlamydia",
        image: "chlamydia.jpg",
        cause: "Bacteria (Chlamydia trachomatis)",
        symptoms: "Often none; can include genital discharge, pain during urination, pelvic pain.",
        treatable: "Yes, with antibiotics."
      }, {
        name: "Gonorrhea",
        image: "gonorrhea.jpg",
        cause: "Bacteria (Neisseria gonorrhoeae)",
        symptoms: "Often asymptomatic; can cause discharge, painful urination, pelvic/testicular pain.",
        treatable: "Yes, with antibiotics, though drug resistance is rising."
      }, {
        name: "Herpes Simplex Virus (HSV)",
        image: "hsv.png",
        cause: "Virus (HSV-1 and HSV-2)",
        symptoms: "Painful sores or blisters on genitals/mouth; many have no symptoms.",
        treatable: "No cure, but antiviral meds can reduce symptoms and transmission."
      }, {
        name: "Human Papillomavirus (HPV)",
        image: "hpv.jpg",
        cause: "Virus (many strains)",
        symptoms: "Often none; some strains cause genital warts, others lead to cervical and other cancers.",
        treatable: "No cure for the virus itself, but symptoms and complications can be managed; vaccines exist."
      }, {
        name: "Trichomoniasis",
        image: "trichomoniasis.jpg",
        cause: "Parasite (Trichomonas vaginalis)",
        symptoms: "Often none; may include itching, burning, redness, unusual discharge, or pain during urination or sex.",
        treatable: "Yes, with antibiotics (usually metronidazole or tinidazole)."
      }, {
        name: "Syphilis",
        image: "syphilis.jpg",
        cause: "Bacteria (Treponema pallidum)",
        symptoms: "Painless sores, rashes, flu-like symptoms, and in late stages, serious organ damage.",
        treatable: "Yes, with antibiotics (usually penicillin), especially in early stages."
      }],
      copyright: "All images related to STIs/STDs in this page were extracted from <External href=\"https://www.wikipedia.org/\">Wikipedia</External>"
    },
    home: {
      heading: {
        text: "Getting tested doesn't have to be",
        adjectives: ["shameful", "painful", "scary", "distressing", "chilling", "agonizing"],
        subtitle: "Introducing **Aurora**, your all-in-one digital health assistant with a focus on **privacy** and **stigma-free** access.",
        partners: "Powered by global partners"
      },
      sti: {
        title: "Sexually transmitted infections (STIs)",
        subtitle: "remain a major public health issue, yet they are among the most stigmatized.",
        causes: [
          "Fear of judgement and shame discourage people from seeking STI helping or test.",
          "STIs <Colored color=\"text-red-400 text-2xl\">disproportionately affect women and some ethnic minorities</Colored> due to both biological and societal factors."
        ],
        consequences: "Consequences of inaction: <Underline>Misdiagnosis</Underline>, <Underline>Late Treatment</Underline>, <Underline>Spread of Infections</Underline>, and <Underline>Mental Health Toll</Underline>",
        rates: {
          gono: {
            text: "higher than among White Americans, gonorrhea rates are disproportionately high in the Black population.",
            extra: "(U.S. CDC 2024 STI Surveillance Report)"
          },
          late: {
            text: "higher risk of death in the first year for those diagnosed late compared to those diagnosed early."
          },
          contract: {
            text: "of females contract gonorrhea from a single encounter with an infected male, while only 20% of males contract it from an infected female."
          }
        },
        siloed: "Existing STI-related care is <Colored color=\"text-red-400 text-2xl\">SILOED</Colored>",
        separately: "Diagnosis, mental health, and follow-up care often happen separately, if at all.",
        result: "The result?",
        fragmented: "A fragmented, judgmental, and inaccessible system that fails those most at risk."
      },
      bystep: {
        title: "Step-by-step STI support",
        subtitle: "Privacy-first AI platform for dignified and stigma-free STI detection, support and holistic care.",
        steps: [{
          title: "Learn: In-App STI Education & AI Chat Support",
          text: "Aurora offers medically accurate STI information through an in-app AI chatbot that answers symptom-based questions, providing private, judgement-free support."
        }, {
          title: "Detect: Private Early Screening via On-Device Scan",
          text: "Users can discreetly scan affected areas with their phone, using an on-device AI model with Convolutional Neural Network (CNN) [TensorFlow Lite] that ensures privacy and delivers accurate, bias-reduced STI predictions."
        }, {
          title: "Confirm: Anonymous Test Kit Delivery",
          text: "If early detection suggests risk, user can order a test kit delivered to a nearby post office box for privacy."
        }, {
          title: "Support: Emotional Care While Waiting For Results",
          text: "Waiting for results can trigger anxiety. Aurora offers teleconsultation with trained social workers to support users through uncertainty, fear, and stigma."
        }, {
          title: "Treat: Match with Specialists",
          text: "Upon diagnosis, we match patients with doctors for follow-up treatment and care, based on location, needs, and preferences."
        }, {
          title: "Connect: Anonymous STI Community Forum",
          text: "We're building an anonymous, peer-led STI support platform moderated by health professionals to ensure accuracy, reduce stigma, and bust myths. Think: a safe, science-backed Reddit for STIs."
        }]
      },
      benchmarking: {
        title: "Benchmarking the statu quo",
        subtitle: "While existing solutions address fragments of the STI care journey, Aurora stands out as a truly end-to-end platform combining education, early detection, emotional and medical support and inclusive design, all within a privacy-first experience.",
        rows: {
          education: "STI Education & AI Chatbot",
          scanning: "AI-Powered Self-Scanning",
          delivery: "Test Kit Delivery",
          support: "Emotional & Mental Health Support",
          matching: "Post-Diagnosis Doctor Matching",
          community: "Community Support Platform"
        },
        yes: {
          assistant: "24/7 AI Assistant",
          device: "On-device CNN",
          anonymous: "Anonymous PO Box",
          teleconsults: "Social worker teleconsults",
          specialist: "Specialist-matching engine",
          forum: "Anonymous, moderated forum"
        }
      },
      empowerment: {
        title: "From fear to empowerment",
        subtitle: "The real barrier in sexual health often isn't access. It's fear and stigma. Aurora rebuilds the care experience from the ground up, using AI not just for diagnosis, but to foster trust through privacy, empathy and personalization.",
        empathy: {
          title: "We Start With Empathy & Design Around Reality",
          list: [
            "Many avoid STI testing not because it's hard, but because it's humiliating.",
            "Aurora breaks that barrier by meeting users where they are; on their phones, in private, and in control."
          ]
        },
        difference: {
          title: "How Aurora Makes a Difference",
          list: [{
            bold: "Scan, don't guess",
            normal: "Our on-device AI turns a smartphone camera into an early warning system, without compromising privacy."
          }, {
            bold: "Test, don't fear",
            normal: "Seamless access to test kits with anonymous delivery means no awkward clinic visits."
          }, {
            bold: "Talk, don't spiral",
            normal: "Immediate emotional support helps users process results and plan next steps, no shame attached."
          }, {
            bold: "Treat, don't delay",
            normal: "We match users with real doctors, not search results or forums."
          }]
        },
        cards: [{
          title: "Personalized Journeys, Not Generic Flows",
          features: [
            "Most health tools dump users into broad categories.",
            "Aurora adapts each user journey based on what they're feeling, asking, and fearing, not just what condition they might have."
          ]
        }, {
          title: "From Static Care to Continuous Support",
          features: [
            "Care doesn't end with diagnosis.",
            "Our AI-powered system learns from interactions, not identities, offering smarter support over time, without tracking users."
          ]
        }, {
          title: "From Reactive to Preventive Behavior",
          features: [
            "Personalized nudges (like subtle check-in prompts or education modules) help users take action before they even feel symptoms.",
            "AI becomes a companion, not just a diagnostic tool."
          ]
        }]
      },
      reimagining: {
        title: "Reimagining the STI care ecosystem",
        subtitle: "We simplify the path from concern to care, while redefining what STI support can look like: human-centered, data-informed, and stigma-free.",
        building: {
          title: "What We're Building:",
          list: [
            "A unified STI care journey that puts the user at the center, not the system.",
            "A platform that adapts to users' emotional, medical, and social needs, not just symptoms.",
            "A foundation for ethical AI in sexual health; private by design, inclusive by intent."
          ],
          tackling: "Tackling STI stigma requires more than access,",
          demands: "it demands care systems that listen, adapt, and never judge."
        },
        needle: {
          title: {
            how: "How",
            moves: "Moves",
            rest: "the Needle on STI care:"
          },
          sections: [{
            title: "Normalizes Early Action",
            text: "By making screening private and routine, Aurora reduces hesitation and delays.",
            icon: "action"
          }, {
            title: "Prioritizes inclusion",
            text: "Serves those most affected (women, LGBTQ+ individuals and minorities) with culturally sensitive, bias-aware tools.",
            icon: "people"
          }, {
            title: "Bridges emotional + clinical care",
            text: "Tackles fear, shame, and isolation with built-in social worker support and community forums.",
            icon: "hand",
            inside: true
          }, {
            title: "Build trust in digital healthcare",
            text: "Sets a new standard for ethical AI and privacy-first design in sensitive medical contexts.",
            icon: "stitch",
            inside: true
          }]
        }
      },
      download: {
        bringing: "Bringing sexual healthcare to everyone—because health shouldn’t depend on where you live.",
        skip: "Skip the clinic. Scan with Aurora. Stay safe.",
        google: "Google Play",
        app: "App Store"
      }
    }
  },
  handling: {
    title: "Data handling & privacy",
    description: "We are committed to protecting the privacy and confidentiality of our users’ personal data. This Privacy Notice outlines the categories of data we collect, the purposes for which such data is processed, and the measures we take to safeguard your information.",
    understood: "I understand",
    clauses: [{
      title: "Data collection",
      text: "We collect only the minimum necessary personal data required to provide our services. This may include:",
      list: [
        "Sex assigned at birth",
        "Current anatomical characteristics",
        "Self-identified gender",
        "Postal code (only in cases where an anonymous at-home test kit is to be delivered)",
        "No other personally identifiable information is required or stored by the application."
      ]
    }, {
      title: "Data usage and disclosure",
      texts: [
        "The data collected is used exclusively for the purpose of delivering accurate health-related assessments and, when applicable, facilitating the anonymous delivery of test kits.",
        "We do not sell, rent, or otherwise disclose your personal data to third parties for commercial or marketing purposes."
      ]
    }, {
      title: "Local processing and image privacy",
      text: "All AI-driven analysis, including the scanning of affected anatomical areas, is performed locally on the user’s device. No images or related data are transmitted to or stored on external servers or cloud infrastructure. This ensures that sensitive content remains entirely within the user’s control."
    }, {
      title: "Data security",
      text: "We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse. Users are encouraged to maintain the security of their devices to ensure continued protection."
    }, {
      title: "Consent",
      text: "By using this application, you acknowledge and agree to the collection and use of your data as outlined in this Privacy Notice. You retain the right to withdraw your consent at any time by discontinuing use of the application."
    }]
  },
  mobile: {
    constants: {
      continue: "Continue",
      back: "Go back",
      yes: "Yes",
      no: "No",
      settings: {
        title: "Settings",
        sections: {
          appearance: {
            title: "Appearance"
          },
          localization: {
            title: "Localization"
          },
          scans: {
            title: "Scans",
            delete: "Auto-delete scans"
          }
        },
        close: "Close",
        placeholder: "There will be something here..."
      },
      chatbot: {
        title: "Aura",
        placeholder: "Write a message...",
        prompt: "Hello!"
      }
    },
    splash: {
      welcome: "Welcome to",
      button: "Get started"
    },
    privacy: {
      notice: "Privacy is at the forefront at <Colored color=\"text-blue-400\">Aurora</Colored>'s mission statement. We won't send your data anywhere, <Underline>pinky promise</Underline>.",
      handling: "Data handling & privacy"
    },
    sex: {
      title: "Tell us more about you",
      questions: {
        sex: "Assigned sex at birth",
        anatomy: "Which one best describes your current anatomy?",
        gender: "Which of the following aligns closest with your current gender identity?"
      },
      buttons: {
        gender: {
          male: "Male",
          female: "Female",
          nonbinary: "Non-binary",
          transgender: "Transgender"
        },
        anatomy: {
          penis: "Penis",
          vagina: "Vagina",
          both: "Both"
        }
      }
    },
    symptoms: {
      title: "Tell us more about your symptoms",
      subtitle: "These questions will help us get a better understanding of how we can help",
      questions: {
        penis: [
          "Do you have any discharge from your penis?",
          "Are you experiencing a burning sensation when you urinate?",
          "Have you noticed any sores, ulcers, or bumps on or around your penis, scrotum, or anus?",
          "Are your testicles swollen or painful?",
          "Do you feel itching or irritation inside your penis or urethra?",
          "Have you experienced pain during ejaculation?",
          "Do you have any anal itching, discharge, or bleeding?"
        ],
        vagina: [
          "Do you have any unusual vaginal discharge (such as a bad smell, unusual color, or texture)?",
          "Are you experiencing a burning sensation when you urinate?",
          "Have you noticed any sores, ulcers, or bumps around your vagina, anus, or mouth?",
          "Have you felt pain during sex?",
          "Are you experiencing lower abdominal or pelvic pain?",
          "Have you had vaginal bleeding between periods or after sex?",
          "Do you have itching, swelling, or irritation around your vagina or vulva?",
          "Do you have any anal itching, discharge, or bleeding?"
        ],
        both: [
          "Have you noticed any unusual rashes or lesions on your genitals or elsewhere on your body?",
          "Have you recently had unprotected sex (vaginal, anal, or oral)?",
          "Have any of your recent sexual partners tested positive for an STI?",
          "Have you experienced any flu-like symptoms (fever, fatigue, swollen lymph nodes)?",
          "Have you had multiple new sexual partners in the past 6 months?"
        ]
      },
      progress: "Survey progress"
    },
    scan: {
      start: "To get started, we must access your device's camera.",
      request: "Request access",
      scanning: "Hold your phone steady",
      prescan: "Scan the affected region(s)",
      camera: (back) => `Use ${(back) ? "front" : "rear"} camera`,
      init: "Begin scan",
      progress: "Scan progress"
    },
    results: {
      possible: "Symptoms could indicate a possible STI; monitor closely or consider testing",
      attention: "Strongly advised to seek medical attention immediately",
      unsure: "Low symptom score, but if unsure or at risk, consider testing anyway",
      subtitle: "But don't fret. Here's what we can do to help:",
      steps: {
        first: {
          title: "Deliver an anonymous test kit straight to your mailbox",
          subtitle: "Postcode",
          placeholder: "Postcode"
        },
        second: {
          title: "Teleconsult a trained specialist",
          button: "Start teleconsult"
        },
        third: {
          title: "Find a nearby clinic",
          button: "Find clinic"
        },
        fourth: {
          title: "Connect with others in our anonymous forum",
          button: "Go to forum"
        }
      }
    }
  }
};