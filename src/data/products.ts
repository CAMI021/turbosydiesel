// src/data/products.ts
export const products = {
    filters: {
      title: 'Filtros',
      description: 'Filtros de aire, combustible y aceite para motores diesel y gasolina',
      products: [
        {
          id: 'fa-001',
          name: 'Filtro de Aire Heavy Duty HD-2500',
          brand: 'Mann Filter',
          image: '/productos/filtros/aire.jpg',
          price: '$89.99',
          applications: ['Caterpillar', 'Komatsu', 'Volvo'],
          shortDesc: 'Filtro de aire para maquinaria pesada con alta capacidad de filtración',
          technicalSpecs: [
            { label: 'Flujo de aire', value: '2500 CFM' },
            { label: 'Material', value: 'Papel sintético' },
            { label: 'Presión máxima', value: '15 PSI' }
          ]
        },
        {
          id: 'ff-001',
          name: 'Filtro de Combustible Racor',
          brand: 'Racor',
          image: '/productos/filtros_racor.jpg',
          price: '$45.50',
          applications: ['Cummins', 'Detroit Diesel'],
          shortDesc: 'Filtro de combustible con separador de agua',
          technicalSpecs: [
            { label: 'Capacidad', value: '10 galones' },
            { label: 'Material', value: 'Aluminio' },
            { label: 'Temperatura', value: '-40°C a 120°C' }
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
          image: '/productos/inyectores.jpg',
          price: '$320.00',
          applications: ['Volkswagen', 'Mercedes', 'BMW'],
          shortDesc: 'Inyector de alta precisión para sistemas Common Rail',
          technicalSpecs: [
            { label: 'Presión', value: '2000 bar' },
            { label: 'Flujo', value: '150 mm³/ciclo' },
            { label: 'Conexión', value: 'ISO 12092' }
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
          ]
        }
      ]
    }
  };