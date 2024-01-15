export const generateRequestCreateProduct = () => {
  return {
    sku: 43264,
    // eslint-disable-next-line quotes
    name: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
    inventory: {
      warehouses: [
        {
          locality: 'SP',
          quantity: 12,
          type: 'ECOMMERCE',
        },
        {
          locality: 'MOEMA',
          quantity: 3,
          type: 'PHYSICAL_STORE',
        },
      ],
    },
  };
};
