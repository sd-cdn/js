document.addEventListener("DOMContentLoaded", function () {
            const socialBox = document.getElementById("social-join");
            if (socialBox) {
              const waImg = "https://img.sarkarijob24.com/whatsapp.png";
              const tgImg = "https://img.sarkarijob24.com/telegram_icon.png";
              const waLink = "https://whatsapp.com/channel/0029VaB5GSX96H4JVQ8nKr2O";
              const tgLink = "https://t.me/SarkariJob24_com";
              socialBox.innerHTML = `
            <span class="join-label">Join Now:</span>
            <a href="${waLink}" class="img-btn wa-btn" target="_blank" rel="noopener">
                <img src="${waImg}" width="20" height="20" alt="WhatsApp"> WhatsApp
            </a>
            <a href="${tgLink}" class="img-btn tg-btn" target="_blank" rel="noopener">
                <img src="${tgImg}" width="20" height="20" alt="Telegram"> Telegram
            </a>
        `;
            }
          });
