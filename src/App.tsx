import { useState } from 'react';
import Button from '@atlaskit/button/new';
import LinkButton from '@atlaskit/button/link';
import Lozenge from '@atlaskit/lozenge';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import { token } from '@atlaskit/tokens';
import { experience, pillars, profile, stories } from './content';

const navigation = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#expertise', label: 'Chuyên môn' },
  { href: '#work', label: 'Dấu ấn' },
  { href: '#experience', label: 'Hành trình' },
];
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '↗'}</span>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Đến nội dung chính
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="identity" href="#" aria-label="Hồ Thị Hằng — đầu trang">
            <span className="monogram">
              h<span>.</span>
            </span>
            <span>
              Hồ Thị Hằng<span className="identity-sub">HUMAN RESOURCES</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Điều hướng chính">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <LinkButton href="#contact" appearance="primary">
              Kết nối <Arrow />
            </LinkButton>
            <span className="mobile-toggle">
              <Button
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? 'Đóng' : 'Menu'}
              </Button>
            </span>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" className="mobile-nav shell" aria-label="Điều hướng di động">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero shell" id="about" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="small-line" /> PEOPLE · PURPOSE · POSSIBILITIES
            </div>
            <h1 id="hero-title">
              Bắt đầu từ
              <br />
              <span className="serif">con người.</span>
            </h1>
            <p className="hero-intro">
              Xin chào, mình là <strong>{profile.name}.</strong>
            </p>
            <p className="hero-description">
              Mình theo đuổi công việc nhân sự — nơi sự thấu hiểu gặp tính chỉn chu, và mỗi kết nối
              mở ra một khả năng mới.
            </p>
            <div className="flex flex-wrap gap-3 hero-buttons">
              <LinkButton href="#expertise" appearance="primary">
                Khám phá định hướng <Arrow />
              </LinkButton>
              <LinkButton
                href={profile.linkedin}
                appearance="subtle"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow diagonal />
              </LinkButton>
            </div>
            <div className="hero-footnote">
              <span className="status-dot" /> Human Resources <span aria-hidden="true">/</span> Hồ
              sơ cá nhân
            </div>
          </div>
          <div className="hero-art" aria-label="Minh họa kết nối các lĩnh vực nhân sự">
            <div className="art-grid" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-label">THE HUMAN SIDE OF WORK</div>
            <div className="people-card">
              <span className="card-micro">MỘT GÓC NHÌN</span>
              <span className="art-word">
                People
                <br />
                <i>first.</i>
              </span>
              <span className="card-rule" />
              <span className="card-caption">Thấu hiểu. Kết nối. Đồng hành.</span>
            </div>
            <span className="floating-note note-blue">↗&nbsp; Talent & opportunity</span>
            <span className="floating-note note-green">✳&nbsp; Culture & connection</span>
            <div className="art-bottom">
              <span>HỒ THỊ HẰNG</span>
              <span>HR PORTFOLIO — 01</span>
            </div>
          </div>
        </section>
        <div className="pillar-strip">
          <div className="shell flex flex-wrap items-center justify-between gap-4">
            {pillars.map((p) => (
              <a key={p.id} href="#expertise">
                <span>{p.number}</span>
                {p.short}
              </a>
            ))}
          </div>
        </div>
        <section className="section shell" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / ĐỊNH HƯỚNG CHUYÊN MÔN</p>
              <h2 id="expertise-title">
                Năm góc nhìn.
                <br />
                <span className="serif">Một trọng tâm.</span>
              </h2>
            </div>
            <p>
              Những lĩnh vực mình muốn tập trung và phát triển — cùng một điểm chung: trải nghiệm
              của con người.
            </p>
          </div>
          <div className="expertise-panel">
            <Tabs id="expertise-tabs">
              <TabList>
                {pillars.map((p) => (
                  <Tab key={p.id}>{p.short}</Tab>
                ))}
              </TabList>
              {pillars.map((p) => (
                <TabPanel key={p.id}>
                  <div className="pillar-detail">
                    <div className="pillar-number" aria-hidden="true">
                      {p.number}
                      <span> / 05</span>
                    </div>
                    <div>
                      <Lozenge appearance="inprogress">Định hướng</Lozenge>
                      <h3>{p.name}</h3>
                      <p className="pillar-summary">{p.description}</p>
                      <p className="muted">{p.detail}</p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {p.tags.map((t) => (
                          <span className="topic-tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </section>
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="shell section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / CÂU CHUYỆN CÔNG VIỆC</p>
                <h2 id="work-title">
                  Từ công việc nhỏ,
                  <br />
                  <span className="serif">đến giá trị chung.</span>
                </h2>
              </div>
              <p>
                Một không gian dành cho những câu chuyện về cách làm việc, đóng góp và điều học
                được.
              </p>
            </div>
            {stories.length ? (
              <div className="story-grid">
                {stories.map((story) => (
                  <article className="story-card" key={story.id}>
                    <Lozenge appearance="inprogress">{story.category}</Lozenge>
                    <h3>{story.title}</h3>
                    <dl>
                      <dt>Bối cảnh</dt>
                      <dd>{story.context}</dd>
                      <dt>Đóng góp</dt>
                      <dd>{story.contribution}</dd>
                      <dt>Kết quả & bài học</dt>
                      <dd>{story.outcome}</dd>
                    </dl>
                  </article>
                ))}
              </div>
            ) : (
              <div className="story-placeholder">
                <div className="story-symbol" aria-hidden="true">
                  ↗
                </div>
                <div>
                  <Lozenge>Đang hoàn thiện</Lozenge>
                  <h3>Mỗi dấu ấn đều cần một câu chuyện thật.</h3>
                  <p>
                    Các dự án và đóng góp cụ thể sẽ được bổ sung sau khi xác nhận nội dung có thể
                    chia sẻ.
                  </p>
                </div>
                <span className="story-index" aria-hidden="true">
                  01 — 03
                </span>
              </div>
            )}
          </div>
        </section>
        <section
          className="section shell experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div>
            <p className="eyebrow">03 / HÀNH TRÌNH</p>
            <h2 id="experience-title">
              Gắn bó với
              <br />
              <span className="serif">nghề nhân sự.</span>
            </h2>
            <p className="muted experience-intro">
              Hành trình được kể bằng công việc và những kết nối có ý nghĩa.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.organization}>
                <div className="timeline-dot" />
                <p className="eyebrow">KINH NGHIỆM ĐƯỢC GIỚI THIỆU</p>
                <h3>{item.organization}</h3>
                <p className="role-title">{item.role}</p>
                <p className="muted">{item.note}</p>
                <span className="timeline-caption">Nguồn: hồ sơ cá nhân công khai</span>
              </article>
            ))}
          </div>
        </section>
        <section className="shell contact-shell" id="contact" aria-labelledby="contact-title">
          <div
            className="contact-card"
            style={{ backgroundColor: token('color.background.brand.bold', '#0C66E4') }}
          >
            <div>
              <p className="eyebrow">04 / CÙNG KẾT NỐI</p>
              <h2 id="contact-title">
                Một lời chào.
                <br />
                <span className="serif">Một kết nối mới.</span>
              </h2>
              <p>
                Trao đổi về công việc nhân sự, một ý tưởng hợp tác,
                <br className="desktop-break" /> hoặc đơn giản là câu chuyện của bạn.
              </p>
            </div>
            <div className="contact-actions">
              <a className="email-link" href={'mailto:' + profile.email}>
                {profile.email}
                <Arrow />
              </a>
              <div className="contact-button-surface">
                <LinkButton href={profile.linkedin} target="_blank" rel="noreferrer">
                  Kết nối trên LinkedIn <Arrow diagonal />
                </LinkButton>
              </div>
              <span className="contact-note">Rất vui được nghe từ bạn.</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <span>
          Hồ Thị Hằng <span className="muted">/ Human Resources</span>
        </span>
        <a href="#">Về đầu trang ↑</a>
        <span className="footer-note">Made with care. Built around people.</span>
      </footer>
    </>
  );
}
