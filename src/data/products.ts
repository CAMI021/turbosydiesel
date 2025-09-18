export const products = {
  filters: {
    title: 'Filtros',
    description: 'Filtros Racor especializados para sistemas de motor diésel',
    products: [
      {
        id: 'turbina',
        name: 'Filtros Serie Turbina',
        brand: 'Racor',
        images: [
          '/productos/filtros/turbina-main.jpg',
          '/productos/filtros/turbina1.jpg',
          '/productos/filtros/turbina2.jpg'
        ],
        technicalSheetPdf: '/pdfs/turbina-specs.pdf',
        shortDesc: 'La mejor protección de combustible con diseño Turbine',
        technicalSpecs: [
          { label: 'Material', value: 'Aluminio de alta calidad + polímero resistente' },
          { label: 'Tecnología', value: 'Medio filtrante Aquabloc II' },
          { label: 'Identificación', value: 'Códigos de colores: rojo (30μ), azul (10μ), marrón (2μ)' }
        ],
        mainFeatures: [
          'Auto purga rápida y sencilla',
          'Protección frente a agua, polvo y contaminantes',
          'Resistente a impactos y temperaturas extremas',
          'Sistema de filtración completo y confiable para motores diésel'
        ]
      },
      {
        id: 'spin-on',
        name: 'Filtros Serie Spin-on',
        brand: 'Racor',
        images: [
          '/productos/filtros/spin-on-main.jpg',
          '/productos/filtros/spin-on1.jpg',
          '/productos/filtros/spin-on2.jpg'
        ],
        technicalSheetPdf: '/pdfs/spin-on-specs.pdf',
        shortDesc: 'Filtros/separadores de agua de alta capacidad con diseño Spin-on',
        technicalSpecs: [
          { label: 'Tecnología', value: 'Aquabloc II' },
          { label: 'Aplicación', value: 'Motores diésel con necesidades de alto caudal' },
          { label: 'Construcción', value: 'Unidades flexibles y adaptables' }
        ],
        mainFeatures: [
          'Incorporan elementos Spin-on de fácil mantenimiento',
          'Separación de agua y contaminantes altamente eficaz',
          'Compatibles con distintas configuraciones de instalación',
          'Incluyen Aquabloc II como estándar'
        ]
      },
      {
        id: 'fbo',
        name: 'Filtros Serie FBO',
        brand: 'Racor',
        images: [
          '/productos/filtros/fbo-main.jpg',
          '/productos/filtros/fbo1.jpg',
          '/productos/filtros/fbo2.jpg'
        ],
        technicalSheetPdf: '/pdfs/fbo-specs.pdf',
        shortDesc: 'Unidades FBO-10 y FBO-14 para aplicaciones de alto caudal',
        technicalSpecs: [
          { label: 'Flujo', value: '95–230 l/min según modelo' },
          { label: 'Presión de diseño', value: '10 bar @ 116 °C' },
          { label: 'Aplicaciones', value: 'Diesel, aviación, gasolina, keroseno, JP4–JP8' }
        ],
        mainFeatures: [
          'Cambio de filtro rápido y sin herramientas especiales',
          'Componentes en acero inoxidable y aluminio fundido',
          'Opciones de montaje versátiles para múltiples sistemas',
          'Disponible con indicadores de presión diferencial y mirilla de nivel'
        ]
      }
    ]
  },
  'common-rail-systems': {
    title: 'Sistemas de inyección Common Rail',
    description: 'Sistemas de inyección diesel de alta precisión con tecnología Common Rail',
    products: [
      {
        id: 'common-rail-injectors',
        name: 'Inyectores Common Rail',
        brand: 'Delphi',
        images: [
          '/productos/inyectores/common-rail-main.jpg',
          '/productos/inyectores/common-rail1.jpg',
          '/productos/inyectores/common-rail2.jpg'
        ],
        technicalSheetPdf: '/pdfs/common-rail-specs.pdf',
        shortDesc: 'Inyectores de alta precisión para sistemas modernos Common Rail',
        technicalSpecs: [
          { label: 'Presión', value: '1500–2500 bar' },
          { label: 'Tipo', value: 'Electromagnético' }
        ],
        mainFeatures: [
          'Control preciso de la inyección',
          'Reducción de emisiones y consumo',
          'Compatibles con posprocesamiento'
        ]
      },
      {
        id: 'common-rail-pumps',
        name: 'Bombas Common Rail',
        brand: 'Delphi',
        images: [
          '/productos/inyectores/common-rail-pump-main.jpg',
          '/productos/inyectores/common-rail-pump1.jpg'
        ],
        technicalSheetPdf: '/pdfs/common-rail-pump-specs.pdf',
        shortDesc: 'Bombas de alta presión para sistemas Common Rail',
        technicalSpecs: [
          { label: 'Presión de trabajo', value: 'Hasta 2500 bar' },
          { label: 'Aplicación', value: 'Motores industriales y de transporte' }
        ],
        mainFeatures: [
          'Suministro constante de alta presión',
          'Diseñadas para eficiencia y confiabilidad',
          'Compatibles con múltiples configuraciones de motor'
        ]
      }
    ]
  },
  'eui-injectors': {
    title: 'Inyectores EUI',
    description: 'Inyectores de tipo Unidad Electrónica (EUI) para motores diesel',
    products: [
      {
        id: 'eui',
        name: 'Inyectores EUI',
        brand: 'Bosch',
        images: [
          '/productos/inyectores/eui-main.jpg',
          '/productos/inyectores/eui1.jpg',
          '/productos/inyectores/eui2.jpg'
        ],
        technicalSheetPdf: '/pdfs/eui-specs.pdf',
        shortDesc: 'Inyectores de tipo Unidad Electrónica (EUI)',
        technicalSpecs: [
          { label: 'Presión', value: '1800 bar' },
          { label: 'Tipo', value: 'Mecánico-electrónico' }
        ],
        mainFeatures: [
          'Alta durabilidad en condiciones exigentes',
          'Inyección independiente por cilindro',
          'Compactos y resistentes'
        ]
      }
    ]
  },
  'pld-pumps': {
    title: 'Bombas PLD',
    description: 'Bombas de alta precisión para sistemas PLD de inyección diesel',
    products: [
      {
        id: 'pld',
        name: 'Bombas PLD',
        brand: 'Delphi',
        images: [
          '/productos/bombas/pld-main.jpg',
          '/productos/bombas/pld1.jpg'
        ],
        technicalSheetPdf: '/pdfs/pld-specs.pdf',
        shortDesc: 'Bombas PLD para sistemas de inyección diesel',
        technicalSpecs: [
          { label: 'Presión', value: '1800 bar' },
          { label: 'Aplicación', value: 'Motores diésel de alta presión' }
        ],
        mainFeatures: [
          'Diseño compacto y eficiente',
          'Alta precisión en el control de inyección',
          'Compatibilidad con múltiples sistemas diesel'
        ]
      }
    ]
  },
  'heui-injectors': {
    title: 'Inyectores HEUI',
    description: 'Inyectores HEUI para motores de alta presión',
    products: [
      {
        id: 'heui',
        name: 'Inyectores HEUI',
        brand: 'Bosch',
        images: [
          '/productos/inyectores/heui-main.jpg',
          '/productos/inyectores/heui1.jpg'
        ],
        technicalSheetPdf: '/pdfs/heui-specs.pdf',
        shortDesc: 'Inyectores HEUI para motores diésel de alta presión',
        technicalSpecs: [
          { label: 'Presión', value: '2000-2500 bar' },
          { label: 'Tipo', value: 'Hidráulico-electrónico' }
        ],
        mainFeatures: [
          'Alta precisión en el control de inyección',
          'Diseño robusto para condiciones extremas',
          'Compatibilidad con sistemas HEUI modernos'
        ]
      }
    ]
  },
  'conventional-injection-systems': {
    title: 'Sistemas de inyección convencionales',
    description: 'Sistemas de inyección tradicionales para motores diesel',
    products: [
      {
        id: 'conventional',
        name: 'Bomba e inyectores',
        brand: 'Delphi',
        images: [
          '/productos/conventional/conventional-main.jpg',
          '/productos/conventional/conventional1.jpg'
        ],
        technicalSheetPdf: '/pdfs/conventional-specs.pdf',
        shortDesc: 'Sistemas de inyección convencionales para motores diesel',
        technicalSpecs: [
          { label: 'Presión', value: '1000-1500 bar' },
          { label: 'Aplicación', value: 'Motores diésel convencionales' }
        ],
        mainFeatures: [
          'Sistema tradicional de inyección mecánica',
          'Diseño robusto y duradero',
          'Compatibilidad con motores antiguos y modernos'
        ]
      }
    ]
  },
  'turbochargers': {
    title: 'Turboalimentadores',
    description: 'Turbos de alto rendimiento con durabilidad comprobada en condiciones extremas',
    products: [
      {
        id: 'holset-hx50',
        name: 'Turbo Holset HX50',
        brand: 'Holset',
        images: [
          '/productos/turbo/holset-hx50-main.jpg',
          '/productos/turbo/holset-hx501.jpg'
        ],
        technicalSheetPdf: '/pdfs/holset-hx50-specs.pdf',
        shortDesc: 'Turbo de alto rendimiento para motores pesados',
        technicalSpecs: [
          { label: 'Flujo de aire', value: '50 lb/min' },
          { label: 'Velocidad', value: '150,000 RPM' }
        ],
        mainFeatures: [
          'Incremento del 30% en potencia',
          'Cojinetes cerámicos',
          'Sistema de enfriamiento integrado'
        ]
      },
      {
        id: 'garrett-gt25',
        name: 'Turbo Garrett GT25',
        brand: 'Garrett',
        images: [
          '/productos/turbo/garrett-gt25-main.jpg',
          '/productos/turbo/garrett-gt251.jpg'
        ],
        technicalSheetPdf: '/pdfs/garrett-gt25-specs.pdf',
        shortDesc: 'Turbo para vehículos de alto rendimiento',
        technicalSpecs: [
          { label: 'Flujo de aire', value: '25 lb/min' },
          { label: 'Velocidad', value: '120,000 RPM' }
        ],
        mainFeatures: [
          'Respuesta rápida a cambios de carga',
          'Optimizado para eficiencia',
          'Compatibilidad con intercooler'
        ]
      },
      {
        id: 'holset-vgt',
        name: 'Turbo Holset VGT',
        brand: 'Holset',
        images: [
          '/productos/turbo/holset-vgt-main.jpg',
          '/productos/turbo/holset-vgt1.jpg'
        ],
        technicalSheetPdf: '/pdfs/holset-vgt-specs.pdf',
        shortDesc: 'Turbo de geometría variable para máxima eficiencia',
        technicalSpecs: [
          { label: 'Tecnología', value: 'Geometría variable (VGT)' },
          { label: 'Aplicación', value: 'Motores diésel modernos' }
        ],
        mainFeatures: [
          'Optimiza el rendimiento en todo el rango de RPM',
          'Mejora consumo y emisiones',
          'Durabilidad comprobada en motores de carga pesada'
        ]
      }
    ]
  }
};