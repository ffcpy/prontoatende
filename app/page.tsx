import Image from "next/image";

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511915107450";

const benefits = [
  {
    icon: "✓",
    title: "100% confidencial",
    description: "Uma conversa com discrição, respeito e total confidencialidade.",
  },
  {
    icon: "♡",
    title: "Acolhimento humanizado",
    description: "Acolhimento atencioso para você e sua família.",
  },
  {
    icon: "24",
    title: "Disponibilidade 24/7",
    description: "Um canal aberto a qualquer hora, todos os dias.",
  },
];

const steps = [
  ["01", "Entre em contato", "Fale conosco pelo WhatsApp e tire suas dúvidas com tranquilidade."],
  ["02", "Conheça as opções", "Receba informações sobre nossas unidades e formas de contato."],
  ["03", "Escolha o próximo passo", "Decida com calma o que faz mais sentido para você e sua família."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="orb orbLeft" />
        <div className="orb orbRight" />
        <div className="grain" />

        <nav className="nav shell" aria-label="Navegação principal">
          <a className="brand originalBrand" href="#inicio" aria-label="Pronto Atende Vidas - início">
            <Image src="/pronto-atende-vidas-logo.png" alt="Pronto Atende Vidas" width={515} height={485} priority />
          </a>
          <div className="navLinks">
            <a href="#como-funciona">Como funciona</a>
            <a href="#acolhimento">Nosso cuidado</a>
            <a className="navCta" href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar agora <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>

        <div className="heroContent shell">
          <div className="availability"><i /> Disponível 24 horas</div>
          <p className="eyebrow">Acolhimento para você e sua família</p>
          <h1>
            Sua jornada de <span>transformação</span> começa aqui.
          </h1>
          <p className="heroText">
            Acolhimento humano e confidencial para você ou seu familiar.
            Estamos prontos para ouvir e orientar em São Paulo e Minas Gerais.
          </p>
          <div className="heroActions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="whatsappIcon" aria-hidden="true">✆</span>
              Iniciar conversa
            </a>
            <a className="button secondary" href="#como-funciona">
              Conhecer unidades <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="microProof">
            <span className="avatars" aria-hidden="true"><i>✓</i><i>♡</i><i>24</i></span>
            <p><strong>Disponível 24 horas</strong><br />Um contato próximo e acolhedor.</p>
          </div>
        </div>

        <div className="benefits shell" id="acolhimento">
          {benefits.map((benefit) => (
            <article className="benefitCard" key={benefit.title}>
              <span className="benefitIcon" aria-hidden="true">{benefit.icon}</span>
              <div><h2>{benefit.title}</h2><p>{benefit.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="stats" aria-label="Nossos diferenciais">
        <div className="shell statsGrid">
          <div><strong>SP e MG</strong><span>unidades</span></div>
          <div><strong>100%</strong><span>confidencial</span></div>
          <div><strong>24h</strong><span>por dia</span></div>
          <p>Uma nova fase pode começar com o primeiro contato.</p>
        </div>
      </section>

      <section className="stepsSection shell" id="como-funciona">
        <div className="sectionIntro">
          <p className="eyebrow dark">Simples, humano e confidencial</p>
          <h2>Acolhimento desde<br />o primeiro contato.</h2>
        </div>
        <div className="stepsList">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div>
            <p className="eyebrow">Estamos aqui para acolher</p>
            <h2>O primeiro passo começa<br />com uma conversa.</h2>
          </div>
          <div className="finalCtaAction">
            <p>Fale agora com a gente. É simples, acolhedor e confidencial.</p>
            <a className="button primary light" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="whatsappIcon" aria-hidden="true">✆</span>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerInner">
          <div className="brand compact originalBrand"><Image src="/pronto-atende-vidas-logo.png" alt="Pronto Atende Vidas" width={515} height={485} /></div>
          <p>Acolhimento humano e confidencial, 24 horas por dia.</p>
          <span>© {new Date().getFullYear()} Pronto Atende</span>
        </div>
      </footer>

      <a className="floatingWhatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar conosco pelo WhatsApp">
        <span aria-hidden="true">✆</span><i />
      </a>
    </main>
  );
}
