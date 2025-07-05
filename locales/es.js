export default {
  constants: {
    theme: {
      dark: "Modo oscuro",
      light: "Modo claro"
    },
    language: "Idioma",
    alts: {
      icon: (name) => `Ícono: ${name}`,
      logo: (name) => `Logo: ${name}`,
      sti: (name) => `ETS: ${name}`,
      photo: (name) => `Foto: ${name}`,
      splash: "Captura del inicio",
      overlay: "Overlay del escaneo"
    },
    labels: {
      comparison: "Comparación del servicio",
      caused: "Causada por",
      symptoms: "Síntomas",
      treatable: "Tratable"
    }
  },
  desktop: {
    navigation: {
      buttons: {
        home: "Inicio",
        about: "Sobre nosotros",
        resources: "Recursos",
        privacy: "Privacidad"
      }
    },
    about: {
      title: "Sobre nosotros",
      description: "Aurora es una plataforma digital que prioriza la privacidad ofreciendo ayuda sobre la salud sexual accesible, centrada en el paciente y sin estigmas. Desde discretas evaluaciones basadas en imagen hasta pruebas en casa y consultas virtuales, Aurora empodera a los individuos, especialmente a las mujeres y minorías étnicas, para acceder a un tratamiento de ETS digno y sin sesgos. Aurora brinda un cuidado de la salud confidencial e inclusivo a comunidades desatendidas."
    },
    resources: {
      title: "Enfermedades/infecciones de transmisión sexual más comunes",
      description: "Las enfermedades/infecciones de transmisión sexual, son infecciones que se transmiten principalmente a través del contacto sexual, incluyendo sexo vaginal, anal y oral. Estas son una preocupación latente de salud pública en todo el mundo, afectando a personas de todas las edades, géneros y orientaciones sexuales. Muchas ETS pueden ser asintomáticas, lo que significa que los individuos puede que no sepan que están infectados y pueden transmitir la infección a otros sin saber. Pruebas regulares, prácticas seguras del sexo, comunicación abierta con la pareja y tratamiento temprano son las claves para prevenir la propagación y las complicaciones a largo plazo de las ETS. La concientización pública y la educación juega un papel crucial en reducir el estigma y alentar los hábitos responsables de salud sexual.",
      infections: [{
        name: "Clamidia",
        image: "chlamydia.jpg",
        cause: "Bacteria (Chlamydia trachomatis)",
        symptoms: "A menudo ninguno; puede incluir descarga genital, dolor al orinar, dolor pélvico.",
        treatable: "Sí, con antibióticos."
      }, {
        name: "Gonorrea",
        image: "gonorrhea.jpg",
        cause: "Bacteria (Neisseria gonorrhoeae)",
        symptoms: "A menudo asintomática; puede causar descarga, dolor al orinar, dolor pélvico/testicular.",
        treatable: "Sí, con antibióticos, aunque la resistencia a los medicamentos está aumentando."
      }, {
        name: "Virus del herpes simple (HSV)",
        image: "hsv.png",
        cause: "Virus (HSV-1 y HSV-2)",
        symptoms: "Llagas o ampollas dolorosas en genitales/boca; muchos no tienen síntomas.",
        treatable: "Sin cura, pero los medicamentos antivirales pueden reducir los síntomas y la transmisión."
      }, {
        name: "Virus del papiloma humano (HPV)",
        image: "hpv.jpg",
        cause: "Virus (muchas cepas)",
        symptoms: "A menudo ninguno; algunas cepas causan verrugas genitales, mientras que otras resultan en cáncer cervical u otros cánceres.",
        treatable: "No hay cura para el virus como tal, pero los síntomas y las complicaciones se pueden manejar; las vacunas existen."
      }, {
        name: "Tricomoniasis",
        image: "trichomoniasis.jpg",
        cause: "Parásito (Trichomonas vaginalis)",
        symptoms: "A menudo ninguno; puede incluir picazón, ardor, enrojecimiento, descarga inusual o dolor al orinar o durante el sexo.",
        treatable: "Sí, con antibióticos (usualmente metrodinazol o tinidazol)."
      }, {
        name: "Sífilis",
        image: "syphilis.jpg",
        cause: "Bacteria (Treponema pallidum)",
        symptoms: "Llagas indoloras, erupciones, síntomas de gripe y, en etapas tardías, daño severo a los órganos.",
        treatable: "Sí, con antibióticos (usualmente penicilina), especialmente en etapas tempranas."
      }],
      copyright: "Todas las imágenes relacionadas a ETS en esta página fueron extraídas de <External href=\"https://www.wikipedia.org/\">Wikipedia</External>"
    },
    home: {
      heading: {
        text: "Hacerse pruebas no tiene por qué ser",
        adjectives: ["vergonzoso", "doloroso", "aterrador", "angustioso", "escalofriante", "agonizante"],
        subtitle: "Presentamos **Aurora**, tu asistente digital de salud todo en uno enfocado en la **privacidad** y en el acceso **sin estigmas**.",
        partners: "Impulsado por socios globales"
      },
      sti: {
        title: "Las enfermedades de transmisión sexual (ETS)",
        subtitle: "son un gran problema de salud pública, sin embargo, aún están entre las más estigmatizadas.",
        causes: [
          "El miedo a ser juzgado y la vergüenza desalenta a las personas de la idea de buscar ayuda o diagnosticar ETS.",
          "Las ETS <Colored color=\"text-red-400 text-2xl\">afectan desproporcionadamente a las mujeres y algunas minorías étnicas</Colored> debido a factores biológicos y sociales."
        ],
        consequences: "Consecuencias de la inacción: <Underline>diagnósticos erróneos</Underline>, <Underline>tratamiento tardío</Underline>, <Underline>propagación de infecciones</Underline>, y <Underline>el costo de la salud mental</Underline>",
        rates: {
          gono: {
            text: "más alto entre americanos blancos, las tasas de gonorrea son desproporcionadamente altas en la población de color.",
            extra: "(Reporte de vigilancia de ETS U.S. CDC 2024)"
          },
          late: {
            text: "más alto riesgo de muerte en el primer año para aquellos diagnosticados tarde comparado a aquellos diagnosticados tempranamente."
          },
          contract: {
            text: "de las mujeres contraen gonorrea a partir de un solo encuentro con un hombre infectado, mientras que solo el 20% de los hombres la contraen a partir de una mujer infectada."
          }
        },
        siloed: "El cuidado relacionado a las ETS está <Colored color=\"text-red-400 text-2xl\">ENSILADO</Colored>",
        separately: "Los diagnósticos, salud mental y el cuidado de seguimiento a menudo suceden por separado, si acaso sucede.",
        result: "¿El resultado?",
        fragmented: "Un fragmentado, crítico e inaccesible sistema que falla a aquellos que están más en riesgo."
      },
      bystep: {
        title: "Ayuda para ETS paso por paso",
        subtitle: "Plataforma de IA enfocada en la privacidad para una detección de ETS digna y sin estigmas, junto con apoyo y cuidado holístico.",
        steps: [{
          title: "Aprende: Educación sobre ETS dentro de la app & Soporte con un chatbot de IA",
          text: "Aurora ofrece información médicamente precisa sobre ETS a través de un chatbot de IA que responde preguntas basadas en síntomas, brindando un soporte privado y sin críticas."
        }, {
          title: "Detecta: Cribado privado temprano a través de un escaneo en el dispositivo",
          text: "Los usuarios pueden escanear discretamente áreas afectadas con sus teléfonos, usando un modelo de IA en el dispositivo con una Red Neuronal Convolucional (CNN) [TensorFlow Lite] que asegura la privacidad y entrega predicciones de ETS precisas y sin sesgos."
        }, {
          title: "Confirma: Entrega de un kit de prueba anónimo",
          text: "Si la detección temprana sugiere un riesgo, el usuario puede ordenar un kit de prueba entregado a una oficina postal cercana por privacidad."
        }, {
          title: "Apoyo: Cuidado emocional al esperar por resultados",
          text: "Esperar por resultados puede causar ansiedad. Aurora ofrece teleconsultas con trabajadores sociales entrenados para apoyar a los usuarios a través de la incertidumbre, miedo y estigma."
        }, {
          title: "Trata: Empareja con especialistas",
          text: "Una vez diagnosticados, emparejamos a los pacientes con doctores para hacer un seguimiento en el tratamiento, basado en la ubicación, necesidades y preferencias."
        }, {
          title: "Conecta: Foro de comunidad anónima sobre ETS",
          text: "Estamos construyendo una plataforma de apoyo para ETS anónimo y con aprendizaje en grupo moderado por profesionales de la salud para asegurar la precisión, reducir el estigma y desmentir mitos."
        }]
      },
      benchmarking: {
        title: "Comparando el statu quo",
        subtitle: "Mientras que las soluciones existentes abordan fragmentos del viaje de cuidado de ETS, Aurora sobresale como una plataforma verdaderamente del inicio hasta el final combinando educación, detección temprana, apoyo emocional y médico y diseño inclusivo, todo dentro de una experiencia que prioriza la privacidad.",
        rows: {
          education: "Educación sobre ETS & Chatbot de IA",
          scanning: "Autoescaneo impulsado por IA",
          delivery: "Entrega de kits de prueba",
          support: "Apoyo emocional y de salud mental",
          matching: "Emparejamiento con doctores luego del diagnóstico",
          community: "Plataforma de apoyo comunitario"
        },
        yes: {
          assistant: "Asistente de IA 24/7",
          device: "CNN en el dispositivo",
          anonymous: "Caja anónima a oficina postal",
          teleconsults: "Teleconsultas con trabajadores sociales",
          specialist: "Motor de emparejamiento con especialistas",
          forum: "Foro anónimo moderado"
        }
      },
      empowerment: {
        title: "Del miedo al empoderamiento",
        subtitle: "La barrera real en la salud sexual a menudo no es el acceso. Es el miedo y el estigma. Aurora reconstruye la experiencia de atención desde cero, usando IA no solo para diagnóstico, sino también para fomentar la confianza a través de la privacidad, empatía y personalización.",
        empathy: {
          title: "Empezamos con empatía & Diseño alrededor de la realidad",
          list: [
            "Muchos evitan pruebas de ETS no porque sea difícil, sino porque es humillante.",
            "Aurora rompe esa barrera al encontrarse con los usuarios donde están; en sus teléfonos, en privado y en control."
          ]
        },
        difference: {
          title: "Cómo Aurora hace la diferencia",
          list: [{
            bold: "Escanea, no adivines",
            normal: "Nuestra IA en el dispositivo convierte la cámara de un teléfono inteligente en un sistema de alerta temprana, sin comprometer la privacidad."
          }, {
            bold: "Prueba, no temas",
            normal: "Acceso sin costura a kits de prueba con envío anónimo significa no visitas clínicas incómodas."
          }, {
            bold: "Habla, no sobrepienses",
            normal: "El apoyo emocional inmediato ayuda a los usuarios a procesar los resultados y a planear los siguientes pasos, sin vergüenza adjunta."
          }, {
            bold: "Trata, no tardes",
            normal: "Emparejamos a los usuarios con doctores reales, no con resultados de búsqueda o foros."
          }]
        },
        cards: [{
          title: "Viajes personalizados, no flujos genéricos",
          features: [
            "La mayoría de las herramientas de salud dividen a los usuarios en categorías amplias.",
            "Aurora adapta cada viaje del usuario basado en lo que está sintiendo, preguntando y temiendo, no solo en qué condición pueda tener."
          ]
        }, {
          title: "Del cuidado estático al apoyo continuo",
          features: [
            "El cuidado no termina con un diagnóstico.",
            "Nuestro sistema impulsado por IA aprende de las interacciones, no de identidades, ofreciendo un apoyo más inteligente a lo largo del tiempo, sin vigilar a los usuarios."
          ]
        }, {
          title: "De un comportamiento reactivo a uno preventivo",
          features: [
            "Los epujoncitos personalizados (como preguntas sutiles al llegar o módulos de educación) ayudan a los usuarios a tomar acción incluso antes de que sientan síntomas.",
            "La IA se convierte en una compañía, no solo en una herramienta."
          ]
        }]
      },
      reimagining: {
        title: "Reimaginando el ecosistema de cuidado de ETS",
        subtitle: "Nosotros simplificamos el camino de la preocupación al cuidado, mientras redefinimos cómo el apoyo para ETS puede verse: centrado en el ser humano, informado y libre de estigma.",
        building: {
          title: "Qué estamos construyendo:",
          list: [
            "Un viaje unificado de cuidado de ETS que pone al usuario en el centro, no al sistema.",
            "Una plataforma que se adapta a las necesidades emocionales, médicas y sociales del usuario, no solo a síntomas.",
            "Un fundamento para la IA ética en la salud sexual: privada por diseño, inclusiva por intención."
          ],
          tackling: "Abordar el estigma sobre las ETS requiere más que acceso,",
          demands: "demanda sistemas de cuidado que escuchan, se adaptan y nunca juzgan."
        },
        needle: {
          title: {
            how: "Cómo",
            moves: "marca",
            rest: "la diferencia en el cuidado de ETS:"
          },
          sections: [{
            title: "Normaliza la acción temprana",
            text: "Al hacer privado el cribado y la rutina, Aurora reduce la indecisión y la demora.",
            icon: "action"
          }, {
            title: "Prioriza la inclusión",
            text: "Sirve a aquellos más afectados (mujeres, individuos LGBTQ+ y minorías) con herramientas culturalmente sensibles y al tanto de los sesgos.",
            icon: "people"
          }, {
            title: "Conecta la atención emocional + clínica",
            text: "Aborda el miedo, vergüenza e isolación con el apoyo incorporado de trabajadores sociales y el foro comunitario.",
            icon: "hand",
            inside: true
          }, {
            title: "Construye confianza en el ciudado de la salud digital",
            text: "Establece un nuevoo estándar para la IA ética y el diseño centrado en la privacidad en contextos médicos sensibles.",
            icon: "stitch",
            inside: true
          }]
        }
      },
      download: {
        bringing: "Trayendo cuidado de la salud sexual a todos—porque la salud no debe depender de dónde vivas.",
        skip: "Evita la clínica. Escanea con Aurora. Mantente seguro.",
        google: "Google Play",
        app: "App Store"
      }
    }
  },
  handling: {
    title: "Manejo de datos & privacidad",
    description: "Estamos comprometidos en proteger la privacidad y confidencialidad de los datos personales de nuestros usuarios. Este aviso de privacidad describe las categorías de los datos que recolectamos, el propósito para el cual dichos datos son procesados y las medidas que tomamos para salvaguardar tu información.",
    understood: "Entiendo",
    clauses: [{
      title: "Recolección de datos",
      text: "Solo recolectamos el mínimo necesario de datos personales requeridos para ofrecer nuestros servicios. Esto puede incluir:",
      list: [
        "Sexo asignado al nacer",
        "Características anatómicas actuales",
        "Género autoidentificado",
        "Código postal (solo en casos donde un kit de pruebas anónimo tenga que ser enviado.",
        "Ninguna otra información identificable personalmente es requerida o almacenada por la aplicación."
      ]
    }, {
      title: "Uso y divulgación de datos",
      texts: [
        "Los datos recoletados son usados exclusivamente con el propósito de entregar evaluaciones relacionadas a la salud y, mientras sea aplicable, facilitar el envío anónimo de kits de prueba.",
        "No vendemos, alquilamos o de cualquier forma divulgamos tus datos personales a terceros con propósitos comerciales o de marketing."
      ]
    }, {
      title: "Procesamiento local y la privacidad de imagen",
      text: "Todo análisis impulsado por IA, incluido el escaneo de áreas anatómicas afectadas es realizado localmente el el dispositivo del usuario. Ninguna imagen o información relacionada es transmitida hacia o almacenada en servidores externos o infraestructura en la nube. Esto asegura que el contenido sensible permanezca enteramente dentro del control del usuario."
    }, {
      title: "Seguridad de los datos",
      text: "Implementamos técnicas y medidas organizacionales apropiadas para proteger tus datos contra acceso no autorizado, pérdida o mal uso. Se alenta a los usuarios a mantener la seguridad de sus dispositivos para asegurar la protección continua."
    }, {
      title: "Consentimiento",
      text: "Al usar esta aplicación, reconoces y aceptas a la recolección y uso de tus datos como se describe en este aviso de privacidad. Conservas el derecho a retirar tu consentimiento en cualquier momento al descontinuar el uso de esta aplicación."
    }]
  },
  mobile: {
    constants: {
      continue: "Continuar",
      back: "Ir atrás",
      yes: "Sí",
      no: "No",
      settings: {
        title: "Ajustes",
        sections: {
          appearance: {
            title: "Apariencia"
          },
          localization: {
            title: "Localización"
          },
          scans: {
            title: "Escaneos",
            delete: "Autoeliminar escaneos"
          }
        },
        close: "Cerrar",
        placeholder: "Habrá algo aquí..."
      },
      chatbot: {
        title: "Aura",
        placeholder: "Escribe un mensaje...",
        prompt: "Hola!"
      }
    },
    splash: {
      welcome: "Bienvenido a",
      button: "Empezar"
    },
    privacy: {
      notice: "La privacidad es una prioridad en la misión de <Colored color=\"text-blue-400\">Aurora</Colored>. No compartiremos tus datos con nadie, <Underline>lo prometemos</Underline>.",
      handling: "Manejo de datos & privacidad"
    },
    sex: {
      title: "Cuéntamos más sobre ti",
      questions: {
        sex: "Sexo asignado al nacer",
        anatomy: "¿Cuál de estos describe mejor tu anatomía actual?",
        gender: "¿Cuál de los siguientes se alinea más cerca a tu identidad de genéro actual?"
      },
      buttons: {
        gender: {
          male: "Masculino",
          female: "Femenino",
          nonbinary: "No binario",
          transgender: "Transgénero"
        },
        anatomy: {
          penis: "Pene",
          vagina: "Vagina",
          both: "Ambos"
        }
      }
    },
    symptoms: {
      title: "Cuéntanos más sobre tus síntomas",
      subtitle: "Estas preguntas nos ayudarán a entender mejor cómo podemos ayudar",
      questions: {
        penis: [
          "¿Tienes alguna descarga de tu pene?",
          "¿Estás experimentando una sensación de ardor cuando orinas?",
          "¿Has notado alguna llaga, úlcera o bulto en o alrededor de tu pene, escroto o ano?",
          "¿Tus testículos están hinchados o duelen?",
          "¿Sientes picazón o irritación dentro de tu pene o uretra?",
          "¿Has experimentado dolor durante la eyaculación?",
          "¿Tienes picazón, descarga o sangrado anal?"
        ],
        vagina: [
          "¿Tienes alguna descarga vaginal inusual (así como mal olor, color inusual o textura)?",
          "¿Estás experimentando una sensación de ardor cuando orinas?",
          "¿Has notado alguna llaga, úlcera o bulto alrededor de tu vagina, ano o boca?",
          "¿Has sentido dolor durante el sexo?",
          "¿Estás experimentando dolor en el abdomen bajo o pelvis?",
          "¿Has tenido sangrado vaginal entre periodos o después del sexo?",
          "¿Tienes picazón, hinchazón o irritación alrededor de tu vagina o vulva?",
          "¿Tienes picazón, descarga o sangrado anal?"
        ],
        both: [
          "¿Has notado erupciones inusuales o lesiones en tus genitales o en cualquier otra parte de tu cuerpo?",
          "¿Has tenido sexo sin protección recientemente (vaginal, anal u oral)?",
          "¿Alguna de tus parejas sexuales recientes ha dado positivo en una prueba de ETS?",
          "¿Has experimentado algún síntoma de gripe (fiebre, fatiga, ganglios linfáticos hinchados)?",
          "¿Has tenido varias parejas sexuales nuevas en los últimos 6 meses?"
        ]
      },
      progress: "Progreso de la encuesta"
    },
    scan: {
      start: "Para empezar, necesitamos acceder a la cámara de tu dispositivo.",
      request: "Solicitar acceso",
      scanning: "Mantén tu teléfono estable",
      prescan: "Escanea la(s) región(es) afectada(s)",
      camera: (back) => `Usar cámara ${(back) ? "frontal" : "trasera"}`,
      init: "Iniciar escaneo",
      progress: "Progreso del escaneo"
    },
    results: {
      possible: "Los síntomas podrían indicar una posible ETS; monitorear cercanamente o considerar hacer una prueba",
      attention: "Recomendación fuerte a buscar atención médica inmediatamente",
      unsure: "Bajo puntaje sintomático, si no estás seguro o en riesgo, considera hacer una prueba de todas formas",
      subtitle: "Pero no te preocupes. Aquí está lo que podemos hacer para ayudar:",
      steps: {
        first: {
          title: "Entregar un kit de prueba anónimo directo a tu buzón",
          subtitle: "Código postal",
          placeholder: "Código postal"
        },
        second: {
          title: "Teleconsulta a un especialista entrenado",
          button: "Empezar teleconsulta"
        },
        third: {
          title: "Encuentra una clínica cercana",
          button: "Encontrar clínica"
        },
        fourth: {
          title: "Conecta con otros en nuestro foro anónimo",
          button: "Ir al foro"
        }
      }
    }
  }
};