// src/data/products.ts
export const products = {
  filters: {
    title: 'Filtros',
    description: 'Filtros de aire, combustible y aceite para motores diesel y gasolina',
    products: [
      {
        id: '500FG',
        name: '500FG Filtro separador',
        brand: 'Racor',
        image: '/productos/filtros/500FG.png',
        applications: ['John Deere', 'Ford Power Stroke', 'International'],
        shortDesc: 'Filtro separador de combustible compacto y eficiente',
        price: '$98.75',
        technicalSpecs: [
          { label: 'Flujo máximo', value: '50 GPH (189 LPH)' },
          { label: 'Tamaño de puerto', value: '3/4"-14 UNF (SAE J1926), rosca hembra' },
          { label: 'Altura', value: '14.2 in. (36.1 cm)' },
          { label: 'Profundidad', value: '6.0 in. (15.2 cm)' },
          { label: 'Ancho', value: '5.5 in. (14.0 cm)' },
          { label: 'Peso (seco)', value: '4.2 lb (1.9 kg)' },
          { label: 'Caída de presión limpia', value: '0.25 PSI (0.017 bar)' },
          { label: 'Presión máxima', value: '15 PSI (1.03 bar)' },
          { label: 'Capacidad de agua en entrada', value: '6.8 oz (200 ml)' },
          { label: 'Eficiencia de eliminación de agua', value: '98%' },
          { label: 'Rango de temperatura ambiente', value: '-40° a +255°F (-40° a +124°C)' },
          { label: 'Temperatura máxima del combustible', value: '190°F (88°C)' },
          { label: 'Filtro de repuesto (2 micrones)', value: 'New: 1040N-02 (Old: 1040SM.OR)' },
          { label: 'Filtro de repuesto (10 micrones)', value: 'New: 1040N-10 (Old: 1040TM.OR)' },
          { label: 'Filtro de repuesto (30 micrones)', value: 'New: 1040N-30 (Old: 1040PM.OR)' }
        ],
        mainFeatures: [
          'Alta eficiencia en separación de agua y contaminantes',
          'Diseño compacto ideal para espacios reducidos',
          'Drenaje manual de agua con válvula de purga',
          'Compatible con combustibles diésel y biodiésel'
        ]
      },
      {
        id: '900FG',
        name: '900FG Filtro separador',
        brand: 'Racor',
        image: '/productos/filtros/900FG.png',
        applications: ['Caterpillar', 'Komatsu', 'Volvo'],
        shortDesc: 'Filtro separador de combustible',
        price: '$145.50',
        technicalSpecs: [
          { label: 'Flujo máximo', value: '90 GPH (341 LPH)' },
          { label: 'Tamaño de puerto', value: '7/8"-14 UNF (SAE J1926), rosca hembra' },
          { label: 'Altura', value: '17.0 in. (43.2 cm)' },
          { label: 'Profundidad', value: '7.0 in. (17.8 cm)' },
          { label: 'Ancho', value: '6.0 in. (15.2 cm)' },
          { label: 'Peso (seco)', value: '6.0 lb (2.7 kg)' },
          { label: 'Caída de presión limpia', value: '0.30 PSI (0.021 bar)' },
          { label: 'Presión máxima', value: '15 PSI (1.03 bar)' },
          { label: 'Capacidad de agua en entrada', value: '10.3 oz (305 ml)' },
          { label: 'Eficiencia de eliminación de agua', value: '99%' },
          { label: 'Rango de temperatura ambiente', value: '-40° a +255°F (-40° a +124°C)' },
          { label: 'Temperatura máxima del combustible', value: '190°F (88°C)' },
          { label: 'Filtro de repuesto (2 micrones)', value: 'New: 2040N-02 (Old: 2040SM.OR)' },
          { label: 'Filtro de repuesto (10 micrones)', value: 'New: 2040N-10 (Old: 2040TM.OR)' },
          { label: 'Filtro de repuesto (30 micrones)', value: 'New: 2040N-30 (Old: 2040PM.OR)' }
        ],
        mainFeatures: [
          'Alta eficiencia en separación de agua',
          'Diseño robusto para ambientes exigentes',
          'Fácil mantenimiento y drenaje',
          'Compatible con sistemas de combustible diesel'
        ]
      },
      {
        id: '1000FG',
        name: '1000FG Filtro separador',
        brand: 'Racor',
        image: '/productos/filtros/1000FG.png',
        price: '$45.50',
        applications: ['Cummins', 'Detroit Diesel'],
        shortDesc: 'Filtro separador de combustible',
        technicalSpecs: [
          { label: 'Capacidad', value: '10 galones' },
          { label: 'Material', value: 'Aluminio' },
          { label: 'Temperatura', value: '-40°C a 120°C' }
        ],
        mainFeatures: [
          'Protección avanzada contra contaminantes',
          'Vida útil prolongada',
          'Instalación sencilla sin herramientas especiales',
          'Indicador visual de reemplazo'
        ]
      }
    ]
  },
  injectors: {
    title: 'Inyectores',
    description: 'Inyectores para sistemas diesel y gasolina',
    products: [
      {
        id: 'in-001',
        name: 'Inyector Common Rail CR-2000',
        brand: 'Delphi',
        image: '/productos/inyectores/CR-2000.png',
        price: '$320.00',
        applications: ['Volkswagen', 'Mercedes', 'BMW'],
        shortDesc: 'Inyector de alta precisión para sistemas Common Rail',
        technicalSpecs: [
          { label: 'Presión', value: '2000 bar' },
          { label: 'Flujo', value: '150 mm³/ciclo' },
          { label: 'Conexión', value: 'ISO 12092' }
        ],
        mainFeatures: [
          'Precisión milimétrica en inyección',
          'Optimización del consumo de combustible',
          'Resistencia a altas presiones',
          'Compatibilidad con sistemas de última generación'
        ]
      },
      {
        id: 'in-002',
        name: 'Inyector Common Rail 0445116035',
        brand: 'Bosch',
        image: '/productos/inyectores/Bosch_0445116035.png',
        price: '$285.00',
        applications: ['Mercedes-Benz OM651', 'Volkswagen TDI'],
        shortDesc: 'Inyector Common Rail remanufacturado con garantía de 12 meses',
        technicalSpecs: [
          { label: 'Presión máxima', value: '2500 bar' },
          { label: 'Tipo de válvula', value: 'Solenoid (12V High-Response)' },
          { label: 'Diámetro de boquilla', value: '0.13mm ±0.2μm' },
          { label: 'Tipo de boquilla', value: '6-huecos láser perforados (DSLA154P132)' },
          { label: 'Presión de apertura', value: '200 bar' },
          { label: 'Compatibilidad OE', value: '0445116035' }
        ],
        mainFeatures: [
          'Reconstruido con piezas genuinas Bosch',
          'Pruebas rigurosas en banco de pruebas',
          'Garantía de 12 meses sin restricciones',
          'Compatible con sistemas Common Rail modernos'
        ]
      },
      {
        id: 'in-003',
        name: 'Inyector Delphi 28599713 ED95',
        brand: 'Delphi',
        image: '/productos/inyectores/Delphi_28599713.png',
        price: '$245.75',
        applications: ['JCB 200', 'JCB 220', '448 D34 Engine'],
        shortDesc: 'Inyector Common Rail de alto rendimiento para maquinaria pesada',
        technicalSpecs: [
          { label: 'Presión máxima', value: '2200 bar' },
          { label: 'Flujo nominal', value: '180 mm³/ciclo' },
          { label: 'Tipo de boquilla', value: '6-huecos láser perforados' },
          { label: 'Diámetro de boquilla', value: '0.13mm ±0.2μm' },
          { label: 'Tensión de operación', value: '12V High-Response' },
          { label: 'Código OE', value: '28599713 / 1100100-ED95' }
        ],
        mainFeatures: [
          'Diseño optimizado para maquinaria agrícola y construcción',
          'Resistencia mejorada a combustibles de baja calidad',
          'Reducción del 15% en emisiones de partículas',
          'Interchangeable con modelos originales Delphi'
        ]
      },
      {
        id: 'in-004',
        name: 'Inyector Bosch 0986435647',
        brand: 'Bosch',
        image: '/productos/inyectores/Bosch_0986435647.png',
        price: '$310.50',
        applications: ['Scania DC13', 'Volvo D13', 'Renault MX11'],
        shortDesc: 'Inyector Common Rail remanufacturado para camiones pesados',
        technicalSpecs: [
          { label: 'Presión máxima', value: '2000 bar' },
          { label: 'Flujo máximo', value: '210 mm³/ciclo' },
          { label: 'Tolerancia de fabricación', value: '±1.5% según especificaciones OE' },
          { label: 'Material de boquilla', value: 'Acero inoxidable endurecido' },
          { label: 'Compatibilidad', value: 'Sistemas Common Rail de 3ª generación' },
          { label: 'Código OE', value: '0986435647' }
        ],
        mainFeatures: [
          'Reconstrucción certificada bajo estándares OE',
          'Pruebas de estanqueidad y rendimiento 100%',
          'Compatibilidad garantizada con sistemas SCR/DPF',
          'Vida útil extendida gracias a tratamiento superficial especial'
        ]
      },
      {
        id: 'in-005',
        name: 'Inyector Delphi 28347042',
        brand: 'Delphi',
        image: '/productos/inyectores/Delphi_28347042.png',
        price: '$220.00',
        applications: ['Dh120-9', 'Dh130-9', 'JCB 448'],
        shortDesc: 'Inyector Common Rail para motores diésel industriales',
        technicalSpecs: [
          { label: 'Presión de inyección', value: '1800 bar' },
          { label: 'Número de orificios', value: '7' },
          { label: 'Diámetro de orificio', value: '0.125mm' },
          { label: 'Tensión nominal', value: '24V' },
          { label: 'Código OE', value: '28347042 / 7256789' },
          { label: 'Garantía', value: '3 meses' }
        ],
        mainFeatures: [
          'Diseñado específicamente para motores industriales',
          'Resistencia mejorada a partículas en combustible',
          'Optimización del patrón de pulverización',
          'Fácil instalación sin necesidad de codificación'
        ]
      }
    ]
  },
  turbos: {
    title: 'Turboalimentadores',
    description: 'Turboalimentadores para sistemas diesel',
    products: [
      {
        id: 'th-001',
        name: 'Turbo Holset HX50',
        brand: 'Holset',
        image: '/productos/turbo_holset.jpg',
        price: '$1,299.00',
        applications: ['Cummins', 'Caterpillar', 'Detroit Diesel'],
        shortDesc: 'Turbo de alto rendimiento para motores pesados',
        technicalSpecs: [
          { label: 'Velocidad máxima', value: '150,000 RPM' },
          { label: 'Material', value: 'Superaleación Inconel' },
          { label: 'Flujo de aire', value: '50 lb/min' }
        ],
        mainFeatures: [
          'Aumento del 30% en potencia del motor',
          'Tecnología de cojinetes de cerámica',
          'Sistema de enfriamiento integrado',
          'Garantía extendida de 24 meses'
        ]
      }
    ]
  },
  testBenches: {
    title: 'Bancos de Prueba',
    description: 'Equipos de diagnóstico y prueba',
    products: [
      {
        id: 'tb-001',
        name: 'Banco de Prueba Hartridge 4000',
        brand: 'Hartridge',
        image: '/productos/hartridge.jpg',
        price: '$24,500.00',
        applications: ['Talleres especializados', 'Laboratorios'],
        shortDesc: 'Sistema completo para prueba y calibración de inyectores',
        technicalSpecs: [
          { label: 'Presión máxima', value: '3000 bar' },
          { label: 'Tipos compatibles', value: 'Common Rail, HEUI, Unit Injector' },
          { label: 'Software', value: 'Hartridge Insight v5.2' }
        ],
        mainFeatures: [
          'Diagnóstico preciso en tiempo real',
          'Interfaz de usuario intuitiva',
          'Base de datos actualizada de calibraciones',
          'Soporte técnico 24/7 incluido'
        ]
      }
    ]
  },
  balanceadoras: {
    title: 'Balanceadoras',
    description: 'Equipos para balanceo dinámico',
    products: [
      {
        id: 'ba-001',
        name: 'Balanceadora Industrial BI-2000',
        brand: 'Schenck',
        image: '/productos/balanceadoras.jpg',
        price: '$8,500.00',
        applications: ['Motores Marinos', 'Generadores', 'Equipos Pesados'],
        shortDesc: 'Sistema de balanceo de alta precisión para componentes rotativos',
        technicalSpecs: [
          { label: 'Rango de peso', value: '0.5 - 200 kg' },
          { label: 'Precisión', value: '0.01 g' },
          { label: 'Velocidad', value: '50 - 10,000 RPM' }
        ],
        mainFeatures: [
          'Tecnología de sensores láser de alta precisión',
          'Software de análisis avanzado',
          'Base de datos de componentes preconfigurados',
          'Reportes detallados en formato PDF'
        ]
      }
    ]
  },
  dpf: {
    title: 'Sistemas DPF',
    description: 'Sistemas de limpieza y mantenimiento DPF',
    products: [
      {
        id: 'dpf-001',
        name: 'Sistema de Limpieza DPF ProClean 5000',
        brand: 'DieselTech',
        image: '/productos/dpf_cleaning.jpg',
        price: '$12,999.00',
        applications: ['Vehículos Comerciales', 'Camiones', 'Buses'],
        shortDesc: 'Sistema profesional para limpieza y recuperación de filtros DPF',
        technicalSpecs: [
          { label: 'Capacidad', value: '5000 L' },
          { label: 'Temperatura máxima', value: '600°C' },
          { label: 'Tiempo de limpieza', value: '30-45 min' }
        ],
        mainFeatures: [
          'Tecnología de limpieza ultrasónica',
          'Sistema de recuperación de hasta el 98% de eficiencia',
          'Programas preconfigurados para diferentes marcas',
          'Certificación ISO 9001 incluida'
        ]
      }
    ]
  }
};