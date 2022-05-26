const productos = [
    //https://www.mercadolibre.com.ar/smart-tv-samsung-series-7-qn85q70aagczb-qled-4k-85-220v/p/MLA18614280#reco_item_pos=1&reco_backend=machinalis-homes-pdp-boos&reco_backend_type=function&reco_client=home_navigation-recommendations&reco_id=639778f1-c33b-49d7-b80f-1762157b8962&c_id=/home/navigation-recommendations/element&c_element_order=2&c_uid=914be52f-0b3e-41d9-885b-8b6f799abe6d
    {
        id: '1',
        name: 'SMART TV 85 px Neo QLED 4K  QN85A',
        price: 439.999,
        category: 'Es smart',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/qn85qn85aagczb/gallery/ar-neo-qled-qn85a-qn85qn85aagczb-501142692?$1300_1038_PNG$',
        stock: 30,
        description: 'El potente procesador de inteligencia artificial (AI) Samsung Neo Quantum 4K de aprendizaje profundo, crea la experiencia más precisa y adaptativa que puedas imaginar. Escena por escena, el procesador optimiza las condiciones de visualización y mejora tus contenidos. Nuestro potente AI upscaling 4K garantiza que siempre obtengas una resolución 4K completa.'
    },
    {
        id: '2',
        name: 'SMART TV 75 px Neo QLED 8K  QN800A',
        price: 439.999,
        category: 'Es smart',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/qn75qn800agczb/gallery/ar-neo-qled-8k-qn800a-qn75qn800agczb-489508642?$1300_1038_PNG$',
        stock: 30,
        description: 'En lugar de una red neuronal para analizar contenidos visuales, el procesador multi-inteligente avanzado de Neo QLED crea la mejor experiencia de visualización en 8K a través de nuestro Neo Quantum Processor 8K, utilizando datos generados a partir de 16 redes neuronales para mejorar cada detalle visual de tu contenido 8K.'
    },
    {
        id: '3',
        name: 'TV 65px QLED SMART Q80A',
        price: 439.999,
        category: 'Es smart',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/qn65q80aagczb/gallery/ar-qled-tv-qn65q80aagczb-front-silver-531921679?$1300_1038_PNG$',
        stock: 30,
        description: 'El procesador Quantum 4K impulsa el rendimiento completo y optimiza de manera inteligente la imagen, el sonido y demás para ofrecerte una experiencia de visualización verdaderamente impresionante.'
    },
]


export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}