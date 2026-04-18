/* ============================================================
   天智工坊 · Tianmind Studio — Landing page interactions
   ============================================================ */

(() => {
  "use strict";

  /* ---------- i18n ---------- */
  const i18n = {
    zh: {
      "brand": "天智工坊",
      "nav.services": "服务",
      "nav.work": "作品",
      "nav.pricing": "报价",
      "nav.faq": "FAQ",
      "nav.contact": "联系",

      "hero.meta": "起始点 / Starting point",
      "hero.eyebrow": "独立工坊 / 个人开发者 / 可签合同开票",
      "hero.title1": "造物 · 思辨 · 超越",
      "hero.lede": "一个人的工厂,一份交代得起的交付。<br>从 0 到 1 的官网、管理系统、小程序、AI 集成 —— 把想法做成能上线的软件。",
      "hero.cta1": "开始合作",
      "hero.cta2": "查看作品",
      "hero.stat1": "服务方向",
      "hero.stat2": "起价",
      "hero.stat3": "免费售后",
      "hero.stat4": "源码交付",

      "manifesto.title": "三条底线 / Three hard rules",
      "manifesto.sub": "不是卖点,是我工作的前提。",
      "manifesto.p1.title": "阶段交付,不做黑盒",
      "manifesto.p1.body": "每个里程碑都有可运行的 demo。从第一周开始,你就能看到真东西,而不是等上线才发现不对劲。",
      "manifesto.p2.title": "全链路自制,不转包",
      "manifesto.p2.body": "一个人对你全负责。前端、后端、部署、运维,全是我本人写的。不会出现「这个问题要找另一个人」。",
      "manifesto.p3.title": "长期售后,不是一次性生意",
      "manifesto.p3.body": "30 天免费 bug 修复 + 小调整。长线合作客户享有更快响应。做的是回头客,不是一锤子买卖。",

      "services.title": "我能交付的 6 件事",
      "services.sub": "不是大而全的「什么都做」,是每一项都真正做过。",
      "svc.web.title": "企业官网 / 落地页",
      "svc.web.desc": "响应式站点、多语言、SEO、Cloudflare / VPS 部署。72 小时可交付简单版本。",
      "svc.admin.title": "管理后台 / 内部工具",
      "svc.admin.desc": "RuoYi / Vue / React 管理系统,权限、报表、审批流、数据导入导出。",
      "svc.mobile.title": "小程序 / H5",
      "svc.mobile.desc": "微信小程序、Uni-app、活动 H5、表单收集、分享海报、支付对接。",
      "svc.saas.title": "SaaS 平台定制",
      "svc.saas.desc": "多租户改造、企业版、泛域名部署。基于 RuoYi-Vue 或从 0 搭建。",
      "svc.saas.badge": "复杂项目",
      "svc.ai.title": "AI 应用集成",
      "svc.ai.desc": "Claude Skill、Agent 工作流、Prompt 工程、LLM 集成、RAG、内容生成。",
      "svc.ai.badge": "热门",
      "svc.ops.title": "运维托管 / 部署",
      "svc.ops.desc": "VPS 搭建、Docker、Nginx、Caddy、域名 SSL、自动部署、监控。",

      "stack.title": "经常吃饭的锅",
      "stack.sub": "用过 3 年以上的,才敢写在这里。",

      "work.title": "手头正在维护的",
      "work.sub": "活的,不是 PPT。",
      "work.1.desc": "严审型 Claude skill:模拟多专家评审团,在作品提交前把致命问题先挑出来。v1.1.1 已发布。",
      "work.2.desc": "把每次对话变成英语练习。答案照常给,顺手纠错和教一句新表达。支持 10 种语言 README。",
      "work.3.desc": "天智工坊服务目录:报价、流程、FAQ、精选作品。GitHub Pages 部署。",
      "work.4.desc": "极简 Cloudflare Pages 静态站起步模板,零构建、零依赖。",

      "pricing.title": "报价,摊开放这里",
      "pricing.sub": "不是藏起来等客户问的数字。最终价看需求。",
      "pricing.col1": "方向 / Scope",
      "pricing.col2": "起价 / Starting at",
      "pricing.col3": "典型周期 / Typical",
      "pricing.r1": "企业官网 / 落地页",
      "pricing.r2": "管理后台 / 内部工具",
      "pricing.r3": "小程序 / H5",
      "pricing.r4": "SaaS 平台定制",
      "pricing.r5": "AI 应用集成",
      "pricing.r6": "运维托管 / 部署",
      "pricing.monthly": "月费可选",

      "process.title": "合作流程 · 6 步",
      "process.s1": "需求沟通(免费,当天回)",
      "process.s2": "方案 + 报价(2 日内)",
      "process.s3": "签合同 + 50% 定金",
      "process.s4": "阶段交付(按里程碑)",
      "process.s5": "验收 + 尾款",
      "process.s6": "部署 + 30 天售后",

      "faq.title": "事先说清楚的六件事",
      "faq.sub": "省得你问了又问。",
      "faq.q1": "为什么报价比一些工作室低?",
      "faq.a1": "没中间商、没销售提成,单人作战。不搞低价陷阱,也不压榨定价 —— 你付的钱就是开发成本 + 合理利润。",
      "faq.q2": "能开发票吗?",
      "faq.a2": "可以。已工商注册,持营业执照,增值税普票或专票都行。",
      "faq.q3": "源码会交付吗?",
      "faq.a3": "所有定制项目源码完整交付,含部署文档。不做源码要挟,不搞长期锁定。",
      "faq.q4": "做到一半不满意怎么办?",
      "faq.a4": "按已完成进度结算,退余款。阶段交付保证不会「付完钱才看到成品」。",
      "faq.q5": "可以签 NDA / 保密协议吗?",
      "faq.a5": "可以。我的常规 NDA 模板可提供,或直接使用贵方模板。",
      "faq.q6": "急单能加急吗?",
      "faq.a6": "可以。加急通常 +20~50% 费用,视紧张程度。但我不接「明天上线」这种不合理需求 —— 对你也没好处。",

      "contact.title": "开工前,先聊聊",
      "contact.sub": "需求不清楚也可以,我帮你梳理。首次沟通免费。",
      "contact.taobao.title": "淘宝店铺 · 天智工坊",
      "contact.taobao.sub": "担保交易 · 七天无理由 · 支持开票",
      "contact.email.sub": "通常当天回复 · 描述越清楚回复越快",
      "contact.site.sub": "官网 · 更多作品与更新",
      "contact.gh.sub": "所有开源项目与源码",
      "contact.licensed": "营业执照 · 可签合同 · 可开发票",

      "footer.made": "Made in China, built to ship.",
      "footer.fork": "Fork this template →"
    },
    en: {
      "brand": "TIANMIND",
      "nav.services": "Services",
      "nav.work": "Work",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",

      "hero.meta": "Starting point",
      "hero.eyebrow": "Indie studio / solo dev / licensed + invoiceable",
      "hero.title1": "Build. Think. Transcend.",
      "hero.lede": "A one-person factory with delivery you can defend.<br>Websites, admin panels, mini-programs, AI integrations — ideas turned into shippable software.",
      "hero.cta1": "Start a project",
      "hero.cta2": "See work",
      "hero.stat1": "Service tracks",
      "hero.stat2": "Starting at",
      "hero.stat3": "Free support",
      "hero.stat4": "Source delivered",

      "manifesto.title": "Three hard rules",
      "manifesto.sub": "Not selling points — preconditions for working with me.",
      "manifesto.p1.title": "Milestone delivery. No black box.",
      "manifesto.p1.body": "Every milestone ships a runnable demo. From week one you see real work — not \"wait until launch and hope for the best\".",
      "manifesto.p2.title": "Full-stack myself. No outsourcing.",
      "manifesto.p2.body": "One person fully accountable. Frontend, backend, deploy, ops — all me. No \"you'll have to ask someone else about that\".",
      "manifesto.p3.title": "Long-term support. Not a one-shot gig.",
      "manifesto.p3.body": "30 days free bug fixes and small tweaks. Returning clients get priority. I'm building a reputation, not flipping projects.",

      "services.title": "Six things I deliver",
      "services.sub": "Not \"we do everything\" — every item is something I've actually shipped.",
      "svc.web.title": "Websites & landing pages",
      "svc.web.desc": "Responsive, multi-lingual, SEO-ready. Cloudflare or VPS deploy. Simple version in 72 hours.",
      "svc.admin.title": "Admin panels & internal tools",
      "svc.admin.desc": "RuoYi / Vue / React admin systems. Roles, reports, approval flows, import/export.",
      "svc.mobile.title": "Mini-programs & H5",
      "svc.mobile.desc": "WeChat mini-programs, Uni-app, campaign H5, form capture, share posters, payment.",
      "svc.saas.title": "SaaS platform customization",
      "svc.saas.desc": "Multi-tenant retrofits, enterprise editions, wildcard domain deploy. RuoYi-Vue or from scratch.",
      "svc.saas.badge": "Complex",
      "svc.ai.title": "AI integrations",
      "svc.ai.desc": "Claude Skills, agent workflows, prompt engineering, LLM integration, RAG, content gen.",
      "svc.ai.badge": "Hot",
      "svc.ops.title": "DevOps & deployment",
      "svc.ops.desc": "VPS setup, Docker, Nginx, Caddy, domain + SSL, auto-deploy, monitoring.",

      "stack.title": "Tools I actually use",
      "stack.sub": "Only things I've used 3+ years make this list.",

      "work.title": "Actively maintained",
      "work.sub": "Real, live, not slideware.",
      "work.1.desc": "A ruthless review Claude skill — simulated expert panel catches fatal problems before you ship. v1.1.1.",
      "work.2.desc": "Turns every Claude conversation into English practice — answers first, then corrects and teaches. READMEs in 10 languages.",
      "work.3.desc": "Tianmind service catalog: pricing, process, FAQ, featured work. Deployed on GitHub Pages.",
      "work.4.desc": "Minimal Cloudflare Pages static starter. Zero build, zero dependencies.",

      "pricing.title": "Pricing, out in the open",
      "pricing.sub": "Not the kind of number I hide until you ask. Final quote depends on scope.",
      "pricing.col1": "Scope",
      "pricing.col2": "Starting at",
      "pricing.col3": "Typical duration",
      "pricing.r1": "Website / landing page",
      "pricing.r2": "Admin panel / internal tool",
      "pricing.r3": "Mini-program / H5",
      "pricing.r4": "SaaS platform customization",
      "pricing.r5": "AI integration",
      "pricing.r6": "DevOps / deployment",
      "pricing.monthly": "Monthly available",

      "process.title": "How we work · 6 steps",
      "process.s1": "Discovery (free, same-day reply)",
      "process.s2": "Proposal + quote (≤ 2 days)",
      "process.s3": "Sign contract + 50% deposit",
      "process.s4": "Milestone delivery",
      "process.s5": "Acceptance + final payment",
      "process.s6": "Deploy + 30-day support",

      "faq.title": "Six things worth saying upfront",
      "faq.sub": "So you don't have to ask twice.",
      "faq.q1": "Why is pricing lower than some studios?",
      "faq.a1": "No middlemen, no sales commissions, one-person shop. No bait-and-switch either — you pay real cost + fair margin.",
      "faq.q2": "Can you issue invoices?",
      "faq.a2": "Yes. Registered business, licensed. VAT general or special invoices both fine.",
      "faq.q3": "Do I get the source code?",
      "faq.a3": "All custom projects ship with full source + deploy docs. No hostage-taking, no vendor lock-in.",
      "faq.q4": "What if I'm not satisfied mid-project?",
      "faq.a4": "Settle by completion progress, refund the remainder. Milestone delivery prevents \"pay-in-full-before-you-see-results\".",
      "faq.q5": "Can you sign an NDA?",
      "faq.a5": "Yes. I can provide a standard NDA, or work with yours.",
      "faq.q6": "Can you handle rush orders?",
      "faq.a6": "Yes — usually +20~50% depending on pressure. But I won't accept \"live-tomorrow\" unrealistic demands — that's bad for you too.",

      "contact.title": "Let's talk before anyone codes",
      "contact.sub": "Unclear requirements are fine — I'll help shape them. First conversation is free.",
      "contact.taobao.title": "Taobao store · Tianmind",
      "contact.taobao.sub": "Escrow · 7-day refund · invoices supported",
      "contact.email.sub": "Usually same-day reply · clearer brief = faster response",
      "contact.site.sub": "Official site · more work and updates",
      "contact.gh.sub": "All open-source projects and source",
      "contact.licensed": "Licensed business · contracts · invoices",

      "footer.made": "Made in China, built to ship.",
      "footer.fork": "Fork this template →"
    }
  };

  /* ---------- Language switcher ---------- */

  function applyLang(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = i18n[lang][key];
      if (val !== undefined) {
        if (val.includes("<br>") || val.includes("<br/>") || val.includes("<br />")) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Toggle visual state
    const toggle = document.getElementById("langToggle");
    if (toggle) {
      const opts = toggle.querySelectorAll(".lang-toggle__opt");
      opts[0].classList.toggle("is-active", lang === "zh");
      opts[1].classList.toggle("is-active", lang === "en");
    }

    try { localStorage.setItem("tianmind_lang", lang); } catch (e) { /* ignore */ }
  }

  function initLang() {
    let saved = "zh";
    try { saved = localStorage.getItem("tianmind_lang") || saved; } catch (e) { /* ignore */ }
    applyLang(saved);

    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const current = document.documentElement.dataset.lang || "zh";
        applyLang(current === "zh" ? "en" : "zh");
      });
    }
  }

  /* ---------- Stat counter ---------- */

  function animateCount(el, target, duration = 1600) {
    const start = performance.now();
    const from = 0;
    const to = Number(target);
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(from + (to - from) * easeOut(progress));
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.getAttribute("data-count");
          animateCount(el, target);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll("[data-count]").forEach((el) => io.observe(el));
  }

  /* ---------- Topbar shrink on scroll ---------- */

  function initTopbar() {
    const topbar = document.querySelector(".topbar");
    if (!topbar) return;
    let lastY = 0;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y > 80) {
        topbar.style.padding = "0.6rem var(--pad-x)";
      } else {
        topbar.style.padding = "1rem var(--pad-x)";
      }
      lastY = y;
    }, { passive: true });
  }

  /* ---------- Reveal on scroll ---------- */

  function initReveal() {
    const targets = document.querySelectorAll(
      ".section-header, .principle, .card, .work-item, .pricing__row, .faq-item, .contact-card, .stack__col"
    );

    targets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Array.from(el.parentNode.children).indexOf(el) * 60;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    targets.forEach((el) => io.observe(el));
  }

  /* ---------- Init ---------- */

  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initCounters();
    initTopbar();
    initReveal();
  });

})();
