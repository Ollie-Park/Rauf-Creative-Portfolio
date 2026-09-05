import { useState, useEffect, useRef } from "react";

import photo1 from "@/imports/WhatsApp_Image_2026-08-31_at_14.51.22.jpeg";
import photo2 from "@/imports/WhatsApp_Image_2026-08-31_at_14.51.22__2_.jpeg";
import photo3 from "@/imports/WhatsApp_Image_2026-08-31_at_14.51.21.jpeg";
import esgulImg from "@/imports/esgul.jpg";
import dufanImg from "@/imports/WhatsApp_Image_2026-08-31_at_14.51.22.jpeg";
import nightImg from "@/imports/WhatsApp_Image_2026-08-31_at_16.21.14.jpeg";
import snowTownImg from "@/imports/WhatsApp_Image_2026-08-31_at_16.21.07__1_.jpeg";
import fireImg from "@/imports/WhatsApp_Image_2026-08-31_at_16.21.11.jpeg";
import witchImg from "@/imports/WhatsApp_Image_2026-08-31_at_16.21.07.jpeg";
import arduinoImg from "@/imports/daniel-andrade-0IZC2kYhYIo-unsplash-scaled.jpg";
import warungImg from "@/imports/079350100_1759479419-warung_sembako_cov.jpg";

function SkillArc({ percent, color }: { percent: number; color: string }) {
  const r = 54;
  const cx = 60;
  const cy = 60;
  const circumference = Math.PI * r;
  const offset = circumference * (1 - percent / 100);

  return (
    <svg width="120" height="70" viewBox="0 0 120 70">
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke="#e0e0e8"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 1.2s ease" }}
      />
      <text x={cx} y={cy - 10} textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a1f2e">
        {percent}%
      </text>
    </svg>
  );
}

const sections = ["home", "introduction", "about", "education", "skills", "experience", "portfolio", "contact"];

export default function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "introduction", label: "Introduction" },
    { id: "about", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div style={{ background: "#EEEEF0", minHeight: "100vh" }}>
      {/* NAV */}
      <nav>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 48px" }}>
          <div style={{ border: "2px solid #1a1f2e", borderRadius: "999px", padding: "6px 18px", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em", lineHeight: 1.3, textAlign: "center" }}>
            MUHAMAD RAFI<br />AUFA NUGRAHA
          </div>
          <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.1em" }}>CREATIVE PRESENTATION</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
            <span style={{ width: 20, height: 20, border: "2px solid #1a1f2e", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 11 }}>i</span>
            <span style={{ fontWeight: 500 }}>September 1, 2026</span>
          </div>
        </div>
        {/* Nav links */}
        <div style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(0,0,0,0.07)", overflowX: "auto" }}>
          {navLinks.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              style={{
                flex: "0 0 auto",
                padding: "10px 20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: active === n.id ? 700 : 500,
                letterSpacing: "0.08em",
                color: active === n.id ? "#3D82C8" : "#1a1f2e",
                borderBottom: active === n.id ? "2px solid #3D82C8" : "2px solid transparent",
                transition: "all 0.2s",
                fontFamily: "Barlow, sans-serif",
              }}
            >
              {n.label.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 60px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Big layered typography */}
          <div style={{ position: "relative" }}>
            <div className="display-heading" style={{ fontSize: "clamp(80px, 15vw, 200px)", color: "#3D82C8", lineHeight: 0.9 }}>
              CREATIVE
            </div>
            {/* Name overlay */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -20%)",
              textAlign: "center",
              zIndex: 10,
              background: "rgba(238,238,240,0.0)",
            }}>
              <div className="display-heading" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#1a1f2e", whiteSpace: "nowrap" }}>
                {" "}
              </div>
              <div className="display-heading" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#3D82C8", whiteSpace: "nowrap" }}>
                {" "}
              </div>
            </div>
            <div className="display-heading" style={{ fontSize: "clamp(80px, 15vw, 200px)", color: "#1a1f2e", lineHeight: 0.9 }}>
              PORTFOLIO
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "20px 60px" }}>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              <PhoneIcon /> +6282299026426
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              <MailIcon /> aufar8571@gmail.com
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              <PinIcon /> Vila Indah Permai Blok G5 no.11<br />Teluk pucung, Bekasi utara
            </span>
          </div>
          <button
            onClick={() => scrollTo("introduction")}
            style={{ width: 44, height: 44, border: "2px solid #1a1f2e", borderRadius: "50%", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <ArrowIcon />
          </button>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="introduction" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", padding: "140px 60px 100px", background: "#EEEEF0" }}>
        <div style={{ position: "relative" }}>
          <img src={dufanImg} alt="Rauf at Dufan Ancol" style={{ width: "100%", height: 480, objectFit: "cover", borderRadius: 4 }} />
        </div>
        <div>
          <div className="display-heading" style={{ fontSize: "clamp(60px, 10vw, 130px)", color: "#1a1f2e", lineHeight: 0.85 }}>
            INTRO-<br /><span style={{ color: "#3D82C8" }}>DUCTION</span>
          </div>
          <p style={{ marginTop: 32, fontSize: 18, fontWeight: 600, lineHeight: 1.6, maxWidth: 480 }}>
            Halo, saya Muhamad Rafi Aufa Nugraha. Saya seorang mahasiswa fakultas ilmu komputer & Designer dan Ilustrator yang berfokus menciptakan pengalaman digital yang intuitif dan fungsional.
          </p>
        </div>
        <FooterBar onNext={() => scrollTo("about")} />
      </section>

      {/* ABOUT ME */}
      <section id="about" style={{ minHeight: "100vh", padding: "140px 60px 100px", background: "#EEEEF0", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <div className="display-heading" style={{ fontSize: "clamp(50px, 9vw, 110px)", color: "#1a1f2e", lineHeight: 0.85 }}>
              HELLO<br />FOLKS!
            </div>
            <div className="display-heading" style={{ fontSize: "clamp(36px, 6vw, 76px)", color: "#3D82C8", lineHeight: 0.85 }}>
              YOU CAN CALL<br />ME RAUF!
            </div>
            <p style={{ marginTop: 32, fontSize: 16, fontWeight: 600, lineHeight: 1.7, maxWidth: 520 }}>
              Saya adalah mahasiswa Teknik Informatika di Universitas Esa Unggul yang memiliki ketertarikan mendalam pada pengembangan web, desain antarmuka (UI/UX), dan eksplorasi teknologi AI. Saya senang menggabungkan kemampuan estetika visual dengan logika pemrograman untuk membangun solusi digital yang solutif. Selain itu saya memiliki hobi yaitu menggambar Ilustrasi dan Design.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignItems: "start", paddingTop: 40 }}>
            <img src={photo2} alt="Rauf at night" style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 4 }} />
            <img src={photo3} alt="Rauf with friend" style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 4, marginTop: 40 }} />
          </div>
        </div>
        <FooterBar onNext={() => scrollTo("education")} />
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ minHeight: "100vh", padding: "140px 60px 100px", background: "#EEEEF0", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "start" }}>
          <div>
            <div className="display-heading" style={{ fontSize: "clamp(50px, 9vw, 110px)", lineHeight: 0.85 }}>
              <span style={{ color: "#1a1f2e" }}>MY</span>
              <span style={{ color: "#3D82C8" }}> EDUCATION</span>
            </div>
            <p style={{ marginTop: 28, fontSize: 16, fontWeight: 600, lineHeight: 1.7, maxWidth: 520 }}>
              Saat ini Saya sedang menjalani kuliah semester 3 di kampus favorit saya yaitu Universitas Esa unggul mengambil jurusan teknik informatika, fakultas ilmu komputer
            </p>
            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
              {[
                { period: "(2017 - 2019)", name: "SMP IBNU UMAR TAHFIDZ BOARDING SCHOOL" },
                { period: "(2020 - 2024)", name: "SMA PONDOK PESANTREN MADINATUL QURAN" },
                { period: "(2025 - NOW)", name: "ESA UNGGUL UNIVERSITY BEKASI" },
              ].map((edu) => (
                <div key={edu.period}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 6 }}>{edu.period}</div>
                  <div className="display-heading" style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "#3D82C8", lineHeight: 1.1 }}>{edu.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: 320, flexShrink: 0 }}>
            <img src={esgulImg} alt="Universitas Esa Unggul" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 4 }} />
          </div>
        </div>
        <FooterBar onNext={() => scrollTo("skills")} />
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ minHeight: "100vh", padding: "140px 60px 100px", background: "#EEEEF0", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <div className="display-heading" style={{ fontSize: "clamp(60px, 10vw, 120px)", lineHeight: 0.85 }}>
              <span style={{ color: "#1a1f2e" }}>MY<br /></span>
              <span style={{ color: "#3D82C8" }}>PERSONAL<br />SKILLS</span>
            </div>
            <p style={{ marginTop: 32, fontSize: 16, fontWeight: 600, lineHeight: 1.7, maxWidth: 460 }}>
              Selain tertarik pada dunia mengembangan web, Saya memiliki kecintaan yang besar terhadap dunia visual dan kreatif melalui hobi menggambar ilustrasi serta eksplorasi berbagai bentuk creative design
            </p>
          </div>
          <div style={{ paddingTop: 20 }}>
            {[
              { name: "MENGGAMBAR ILUSTRASI", pct: 90, color: "#7C5CBF" },
              { name: "CREATIVE DESIGN", pct: 85, color: "#7C5CBF" },
              { name: "WEB DEVELOPMENT", pct: 75.5, color: "#7C5CBF" },
            ].map((skill) => (
              <div key={skill.name} style={{ marginBottom: 32 }}>
                <div style={{ color: "#3D82C8", fontWeight: 800, fontSize: 16, letterSpacing: "0.06em", marginBottom: 8 }}>{skill.name}</div>
                <SkillArc percent={skill.pct} color={skill.color} />
              </div>
            ))}
          </div>
        </div>
        <FooterBar onNext={() => scrollTo("experience")} />
      </section>

      {/* PROJECT EXPERIENCE */}
      <section id="experience" style={{ minHeight: "100vh", padding: "140px 60px 100px", background: "#EEEEF0", position: "relative" }}>
        {/* Project 1 - Arduino */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start", marginBottom: 80 }}>
          <div>
            <div className="display-heading" style={{ fontSize: "clamp(50px, 8vw, 100px)", lineHeight: 0.85 }}>
              <span style={{ color: "#1a1f2e" }}>MY PROJECT<br /></span>
              <span style={{ color: "#3D82C8" }}>EXPERIENCE</span>
            </div>
            <div style={{ marginTop: 40 }}>
              <div style={{ color: "#3D82C8", fontWeight: 800, fontSize: 15, letterSpacing: "0.06em", marginBottom: 12 }}>TRAFFIC LIGHT ARDUINO PROJECT</div>
              <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.7, maxWidth: 460 }}>
                Membuat sistem otomatis arus kendaraan simulasi lampu lalu lintas dengan Arduino UNO dan menerapkan mikrokontroller pada embedded system dengan tujuan memahami hubungan hardware dan sofware
              </p>
            </div>
          </div>
          <div>
            <img src={arduinoImg} alt="Arduino UNO board" style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: 4 }} />
            <div style={{ marginTop: 24 }}>
              <div style={{ color: "#3D82C8", fontWeight: 800, fontSize: 14, letterSpacing: "0.06em", marginBottom: 8 }}>TECHNOLOGIES USED :</div>
              <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6 }}>Arduino UNO, Resistor 220 OHM, LED merah, kuning, hijau</p>
            </div>
          </div>
        </div>

        {/* Project 2 - B2B e-commerce */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 60, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <img src={warungImg} alt="Warung sembako store" style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 4 }} />
            <div style={{ marginTop: 24 }}>
              <div style={{ color: "#3D82C8", fontWeight: 800, fontSize: 14, letterSpacing: "0.06em", marginBottom: 8 }}>TECHNOLOGIES USED :</div>
              <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6 }}>TablePlus (database), VScode (Web Dev), Gemini (Sourcing and research)</p>
            </div>
          </div>
          <div>
            <div className="display-heading" style={{ fontSize: "clamp(50px, 8vw, 100px)", lineHeight: 0.85 }}>
              <span style={{ color: "#1a1f2e" }}>MY PROJECT<br /></span>
              <span style={{ color: "#3D82C8" }}>EXPERIENCE</span>
            </div>
            <div style={{ marginTop: 40 }}>
              <div style={{ color: "#3D82C8", fontWeight: 800, fontSize: 15, letterSpacing: "0.06em", marginBottom: 12 }}>WEB DEVELOPMENT B2B E-COMMERCE</div>
              <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.7, maxWidth: 460 }}>
                Membuat Aplikasi sederhana untuk penjualan warung sembako dengan tujuan menghindari antrean panjang dan menghindari ketidakpastian stok.
              </p>
            </div>
          </div>
        </div>
        <FooterBar onNext={() => scrollTo("portfolio")} />
      </section>

      {/* PROJECT PORTFOLIO */}
      <section id="portfolio" style={{ minHeight: "100vh", padding: "140px 60px 100px", background: "#EEEEF0", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <div className="display-heading" style={{ fontSize: "clamp(60px, 10vw, 120px)", lineHeight: 0.85 }}>
              <span style={{ color: "#3D82C8" }}>PROJECT<br /></span>
              <span style={{ color: "#1a1f2e" }}>PORTFOLIO</span>
            </div>
            <div style={{ marginTop: 48 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#666", marginBottom: 4 }}>FIRST PROJECT</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#1a1f2e" }}>CHICAGO FIRE DEPARTMENT</div>
              <p style={{ marginTop: 8, fontSize: 14, fontWeight: 500, color: "#555", lineHeight: 1.6, maxWidth: 360 }}>
                Ilustrasi digital bertema firefighter dengan gaya&nbsp;&nbsp;art semi-realis, menggambarkan dua karakter di dalam station pemadam kebakaran.
              </p>
            </div>
            <div style={{ marginTop: 32 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#666", marginBottom: 4 }}>SECOND PROJECT</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#1a1f2e" }}>THE NIGHTBOOKS / THE NIGHT TIME BOOKS</div>
              <p style={{ marginTop: 8, fontSize: 14, fontWeight: 500, color: "#555", lineHeight: 1.6, maxWidth: 360 }}>
                Ilustrasi digital bertema fantasi dengan gaya pixel art, menggambarkan karakter yang melayang di antara buku-buku dan bola cahaya di malam hari.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ color: "#3D82C8", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", marginBottom: 8 }}>
                <span style={{ color: "#3D82C8" }}>ASHES</span> IN THE MORNING
              </div>
              <img src={witchImg} alt="Ashes in the Morning illustration" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 4 }} />
            </div>
            <div>
              <img src={snowTownImg} alt="The Snow Town illustration" style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 4, marginTop: 8 }} />
              <div style={{ color: "#1a1f2e", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", marginTop: 8 }}>
                THE <span style={{ color: "#3D82C8" }}>SNOW TOWN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration details */}
        <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <div className="display-heading" style={{ fontSize: "clamp(50px, 8vw, 90px)", lineHeight: 0.85 }}>
              <span style={{ color: "#1a1f2e" }}>FIRST<br /></span>
              <span style={{ color: "#3D82C8" }}>PROJECT</span>
            </div>
            <div style={{ color: "#3D82C8", fontWeight: 700, fontSize: 14, letterSpacing: "0.06em", marginTop: 20 }}>
              <span style={{ color: "#3D82C8" }}>CHICAGO</span> FIRE DEPARTMENT
            </div>
          </div>
          <div>
            <img src={fireImg} alt="Chicago Fire Department illustration" style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: 4 }} />
          </div>
        </div>

        <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <img src={nightImg} alt="The Nightbooks illustration" style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: 4 }} />
          </div>
          <div>
            <div className="display-heading" style={{ fontSize: "clamp(50px, 8vw, 90px)", lineHeight: 0.85 }}>
              <span style={{ color: "#1a1f2e" }}>SECOND<br /></span>
              <span style={{ color: "#3D82C8" }}>PROJECT</span>
            </div>
            <div style={{ color: "#3D82C8", fontWeight: 700, fontSize: 14, letterSpacing: "0.06em", marginTop: 20 }}>
              THE NIGHTBOOKS / <span style={{ color: "#1a1f2e" }}>THE NIGHT TIME BOOKS</span>
            </div>
          </div>
        </div>

        <FooterBar onNext={() => scrollTo("contact")} />
      </section>

      {/* CONTACT / THANK YOU */}
      <section id="contact" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 60px 100px", background: "#EEEEF0", position: "relative" }}>
        <div style={{ textAlign: "center" }}>
          <div className="display-heading" style={{ fontSize: "clamp(80px, 15vw, 200px)", color: "#3D82C8", lineHeight: 0.85 }}>
            THANK YOU
          </div>
          <div className="display-heading" style={{ fontSize: "clamp(70px, 13vw, 180px)", color: "#1a1f2e", lineHeight: 0.85 }}>
            SO MUCH!
          </div>
        </div>
        <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, maxWidth: 800, margin: "80px auto 0" }}>
          {[
            { label: "Github", value: "Ollie-Park" },
            { label: "Gmail", value: "aufar8571@gmail.com" },
            { label: "Discord", value: "ahn_keonho_2005" },
            { label: "Instagram", value: "@rauffarr_art" },
            { label: "Contact", value: "+6282299026426" },
          ].map((c) => (
            <div key={c.label}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{c.label} : <span style={{ fontWeight: 500, textDecoration: c.label === "Github" ? "underline" : "none" }}>{c.value}</span></div>
            </div>
          ))}
        </div>

        {/* Final footer */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "20px 60px" }}>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              <PhoneIcon /> +6282299026426
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              <MailIcon /> aufar8571@gmail.com
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              <PinIcon /> Vila Indah Permai Blok G5 no.11 Teluk pucung, Bekasi utara
            </span>
          </div>
          <button
            onClick={() => scrollTo("home")}
            style={{ width: 44, height: 44, border: "2px solid #1a1f2e", borderRadius: "50%", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(180deg)" }}
          >
            <ArrowIcon />
          </button>
        </div>
      </section>
    </div>
  );
}

function FooterBar({ onNext }: { onNext: () => void }) {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "20px 60px", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
      <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
          <PhoneIcon /> +6282299026426
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
          <MailIcon /> aufar8571@gmail.com
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
          <PinIcon /> Vila Indah Permai Blok G5 no.11 Teluk pucung, Bekasi utara
        </span>
      </div>
      <button
        onClick={onNext}
        style={{ width: 44, height: 44, border: "2px solid #1a1f2e", borderRadius: "50%", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
      >
        <ArrowIcon />
      </button>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 7l10 10M17 7v10H7" />
    </svg>
  );
}
