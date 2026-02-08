// Dane o perfumach (łatwo możesz tu zmienić ceny)
  const perfumeData = [
    { name: "Perfumy 10ml", price: 16 },
    { name: "Perfumy 16ml", price: 28 },
    { name: "Perfumy 30ml", price: 39 },
    { name: "Perfumy 50ml", price: 60 },
    { name: "Perfumy 55ml", price: 75 },
    { name: "Perfumy 100ml", price: 160 },
    { name: "Perfumy 108ml", price: 180 }
  ];

  function generatePricingTable() {
    const container = document.querySelector('.pricing');
    if (!container) return;

    let html = `
      <style>
        .perfume-table {
          width: 100%;
          border-collapse: collapse;
          font-family: sans-serif;
          margin: 20px 0;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .perfume-table th {
          background-color: #f8f9fa;
          color: #333;
          text-align: left;
          padding: 15px;
          font-weight: bold;
          border-bottom: 2px solid #eee;
          text-transform: uppercase;
          font-size: 0.85rem;
        }
        .perfume-table td {
          padding: 14px 15px;
          border-bottom: 1px solid #eee;
          color: #444;
          font-size: 1rem;
        }
        .perfume-table tr:last-child td { border-bottom: none; }
        .perfume-table tr:hover { background-color: #fcfcfc; }
        .price-cell { 
          text-align: right; 
          font-weight: 600; 
          color: #000;
          white-space: nowrap;
        }
        /* Optymalizacja pod mobile */
        @media (max-width: 480px) {
          .perfume-table td, .perfume-table th { padding: 12px 10px; }
        }
      </style>
      <table class="perfume-table">
        <thead>
          <tr>
            <th>Nazwa</th>
            <th style="text-align: right;">Cena</th>
          </tr>
        </thead>
        <tbody>
    `;

    perfumeData.forEach(item => {
      html += `
        <tr>
          <td>${item.name}</td>
          <td class="price-cell">${item.price.toFixed(2).replace('.', ',')} zł</td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    container.innerHTML = html;
  }

  // Uruchomienie funkcji
  generatePricingTable()
