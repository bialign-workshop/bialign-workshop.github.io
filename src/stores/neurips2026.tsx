import {
  CFP,
  Metadata,
  People,
  Overview,
  Schedule,
  Speaker,
  Oral,
  Poster,
  Tiny,
  CHIPeople,
  ProgramCommittee,
} from "./Interfaces";

// TODO: Replace all placeholder content below with real NeurIPS 2026 workshop details.

const overview: Overview = {
  contact: "bidirectional-human-ai-alignment@googlegroups.com",
  slack: "https://join.slack.com/t/bi-alignworkshops/shared_invite/zt-2vpuf45n7-zP8DcmoRwjqfCxVQ4f5_Kw",
  acronym: "BiAlign @ NeurIPS",
  year: "2026",
  location: "Sydney, Australia",
  date: "December 11 or 12, 2026",
  fullName: "Dynamic Alignment in Human–AI Coupled Systems",
  description: (
    <>
    {/* <p>
      This <a href="https://chi2026.acm.org/workshops/accepted/#w37-humanai-interaction-alignment-designing-evaluating-and-evolving-valuecentered-ai-for-reciprocal-humanai-futures" target="_blank">CHI 2026 BiAlign Workshop</a> focuses on <b className="text-framework">bidirectional</b> <b className="text-human">Human</b><b className="text-align">↔</b><b className="text-ai">AI</b> <b className="text-framework">alignment</b>, a paradigm shift in how we approach the challenge of human-AI alignment, which emphasizes the dynamic, complex, and evolving alignment process between humans and AI systems. 
      This is grounded on the <b className="text-highlight">"bidirectional human-AI alignment"</b> framework (see <a href="https://arxiv.org/pdf/2406.09264" target="_blank">Definition</a> and <a href="https://hai-alignment-course.github.io/tutorial/" target="_blank">NeurIPS Tutorial</a>) derived from a <a href="https://arxiv.org/abs/2406.09264" target="_blank">systematic survey</a> of over 400 interdisciplinary alignment papers in Machine Learning (ML), Human Computer Interaction (HCI), Natural Language Processing (NLP), more domains.
      Particularly, it involves two directions to  maximize its benefits for human society.
    </p> */}
      <p>
        This NeurIPS 2026 Workshop focuses on <b className="text-framework">Dynamic Alignment</b> in{" "}
        <b className="text-human">Human</b><b className="text-align">–</b><b className="text-ai">AI</b>{" "}
        <b className="text-framework">Coupled Systems</b> — advancing safety for human–AI systems that{" "}
        <b className="text-highlight">learn, adapt, and co-evolve over time</b>.
        Large language models, multimodal models, and AI systems are increasingly shifting from single-turn
        response tools to long-term interactive actors in education, healthcare, scientific discovery, and other
        high-stakes domains. In these settings, AI systems do not merely affect task outcomes: they shape human
        trust, dependence, risk perception, values, and behavior, while human feedback and behavior in turn
        influence agents' reward signals, objectives, and policy updates. Real-world human–AI systems are
        therefore <b className="text-highlight">bidirectionally coupled and dynamically evolving</b>.
        Building on the <b>Bidirectional Human-AI Alignment</b>{" "}
        framework (<a href="https://arxiv.org/pdf/2406.09264" target="_blank">NeurIPS 2025 Position Paper</a>) and our <a href="https://hai-alignment-course.github.io/tutorial/" target="_blank">NeurIPS 2025 Tutorial</a>, prior <b>BiAlign Workshops</b> at <a href="https://bialign-workshop.github.io/2025" target="_blank">ICLR/CHI 2025</a>, <a href="https://bialign-workshop.github.io/2026" target="_blank">CHI 2026</a>, and <a href="https://hua-shen.org/src/course_bialign.html" target="_blank">Human-AI Alignment Course</a> at NYU Shanghai,
        this workshop emphasizes two key shifts:
      </p>
    {/* <ul>
        <li>
          <b className="text-framework">Aligning AI with Humans</b> (<b className="text-ai">AI</b>-centered perspective): focuses on integrating human specifications into training, steering, customizing, and monitoring AI systems;
        </li>
        <li>
        <b className="text-framework">Aligning Humans with AI</b> (<b className="text-human">Human</b>-centered perspective): aims to preserve human agency and empower humans to critically evaluate, explain, and collaborate with AI systems.
        </li>
      </ul> */}
      <ul>
        <li>
          <b className="text-framework">From AI-Level to Human-AI System-Level Safety</b>: examining AI risks from the
          perspective of the broader <b className="text-human">human</b>–<b className="text-ai">AI</b> coupled
          system, rather than focusing only on the AI model side;
        </li>
        <li>
          <b className="text-framework">From Static to Dynamic Alignment</b>: accounting for continual learning,
          adaptation, and co-evolution within the coupled system, rather than treating alignment as a static,
          one-time objective.
        </li>
      </ul>
    </>
  ),
  challenge: (
    // <>
    // <p>
    //   The rapid advancements in general-purpose AI has precipitated the urgent need to align these systems with values, ethical principles, and goals that match the context of use, i.e., for individuals using an AI system, and for the holistic society at large.
    // </p>
    // <p>
    //   The core goals of this workshop <b className="text-framework">are fourfold</b>: 
    //   <b className="text-framework"> (1)</b> Operationalize Human and Societal Values;
    //   <b className="text-framework"> (2)</b> Advance Design and Interaction Mechanisms;
    //   <b className="text-framework"> (3)</b> Explore Dynamic Evaluation Approaches;
    //   <b className="text-framework"> (4)</b> Foster Interdisciplinary Collaboration and Build Community.
    // </p>
    // </>
    <>
      <p>
        Mainstream alignment methods often treat human feedback as exogenous, preferences as stable, and
        alignment as single-turn output improvement or preference matching. While useful for improving immediate
        model behavior, this paradigm does not fully capture long-term risks such as{" "}
        <b className="text-highlight">
          <a href="https://www.science.org/doi/10.1126/science.aec8352" target="_blank">sycophancy</a>,{" "}
          <a href="https://dl.acm.org/doi/10.1145/3772318.3791149" target="_blank">manipulation</a>,{" "}
          <a href="https://internationalaisafetyreport.org/sites/default/files/2026-02/international-ai-safety-report-2026_1.pdf" target="_blank">overreliance</a>,{" "}
          <a href="https://aclanthology.org/2025.emnlp-main.154/" target="_blank">value-action gap</a>, and{" "}
          <a href="https://dl.acm.org/doi/10.1145/3805689.3806443" target="_blank">delusional spirals</a>
        </b>, which arise from the mutual influence between human states and agent states. Consequently,
        the same AI system may lead to divergent outcomes depending on users' cognitive, emotional, and social
        contexts. AI alignment and safety should therefore be evaluated not only at the model level, but{" "}
        <b className="text-highlight">at the level of the coupled human–AI system</b>, taking humans into account.
      </p>
      <p>
        The core goals of this workshop <b className="text-framework">are fivefold</b>:
        <b className="text-framework"> (1)</b> Establish Dynamic Alignment as a Core Research Problem for AI Safety and Learning;
        <b className="text-framework"> (2)</b> Develop Foundations for Modeling, Measuring, and Controlling Alignment Dynamics;
        <b className="text-framework"> (3)</b> Advance Evaluation Methods and Benchmarks beyond Single-Turn Settings;
        <b className="text-framework"> (4)</b> Foster Interdisciplinary Exchange across Technical and Societal Fields;
        <b className="text-framework"> (5)</b> Produce Concrete Community Outcomes and a Shared Research Agenda.
      </p>
    </>

    ),
  goal: (
    // <>
    // <p>This workshop aims to explore the design space from a comprehensive view of human-AI interaction alignment.</p>
    // </>
    <>
      <p>
        This workshop aims to establish the theoretical, algorithmic, and evaluative foundations of dynamic
        alignment in human-AI coupled systems that co-evolve over time.
      </p>
    </>
  ),
  scope: (
    // <>
    //   <p>This workshop aims to explore the design space of bidirectional human-AI alignment from a comprehensive view, calling for submissions (2-page, 4-page, or 8-page) from various disciplines and topics, including but not limited to (see all in <b className="text-highlight" style={{ color: "red" }}><a href="https://bialign-workshop.github.io/2026/cfp" target="_blank">Call For Papers</a></b>):</p>
    //   <ul>
    //     <li>
    //       <b className="text-framework">Value-Centered Alignment Objectives:</b> Embedding fairness, agency, equity, and responsibility into AI systems 
    //     </li>
    //     <li>
    //       <b className="text-framework">Novel Alignment Demands for Responsible AI:</b> Human-centered alignment demands and goals for responsible AI
    //     </li>
    //     <li>
    //       <b className="text-framework">Designing and Interacting for Alignment:</b> Interfaces, explanation, and participatory methods for steering AI;
    //     </li>
    //     <li>
    //       <b className="text-framework">Evaluating Alignment and Societal Impacts:</b> Metrics and frameworks for technical and social assessment;
    //     </li>
    //     <li>
    //       <b className="text-framework">Dynamic Co-Evolution of Human-AI Futures:</b> Strategies to maintain alignment as humans-AI mutually adapt;
    //     </li>
    //   </ul>
    // </>
    <>
      <p>
        Building on prior alignment-focused venues, this workshop shifts attention toward the{" "}
        <b className="text-highlight">theoretical, algorithmic, and evaluative foundations</b> necessary to shape
        dynamic alignment in human-AI coupled systems research, calling for submissions from various disciplines
        and topics, including but not limited to (see all in{" "}
        <b className="text-highlight" style={{ color: "red" }}>
          <a href="https://bialign-workshop.github.io/neurips2026/cfp" target="_blank">Call For Papers</a>
        </b>):
      </p>
      <ul>
        <li>
          <b className="text-orange">Foundations of Dynamic Alignment:</b> Conceptual and theoretical work
          clarifying alignment in systems where human states, agent policies, feedback signals, objectives, and
          environments co-evolve;
        </li>
        <li>
          <b className="text-orange">Specification, Objectives, and Evolving Preferences:</b> Specifying and
          updating goals, values, norms, and safety constraints under changing human and social contexts;
        </li>
        <li>
          <b className="text-orange">Learning, Adaptation, and Feedback Dynamics:</b> How agents learn from
          repeated human interaction under non-stationary, noisy, or strategic feedback;
        </li>
        <li>
          <b className="text-orange">Evaluation, Benchmarks, and Failure Discovery:</b> Metrics, simulations,
          audits, and red-teaming for long-horizon and interactive alignment;
        </li>
        <li>
          <b className="text-orange">Control, Intervention, and Monitoring:</b> Maintaining or restoring
          alignment after deployment;
        </li>
        <li>
          <b className="text-orange">Collective, Multi-Agent, and Societal Dynamics:</b> Alignment across
          multiple humans, agents, organizations, or institutions;
        </li>
        <li>
          <b className="text-orange">Alignment in Domain-Driven and High-Stakes Applications:</b> Research
          grounded in real-world settings where long-term interaction and safety constraints shape alignment.
        </li>
      </ul>
    </>
  ),
  committeeApplyLink: "https://forms.gle/yCy8ErNeiDdMweBm6",
  backgroundImg: "2026_neurips_logo_background.png",
  confLogoImg: "2026_neurips_logo.png",
  logoImg: "logo.png",
  logoWithWord: "2026_neurips_logo.png",
  confName: "NeurIPS",
};

const organizers: People[] = [];

const chiorganizers: CHIPeople[] = [
  {
    name: "Hua Shen",
    affliation: "NYU Shanghai / New York University",
    webpage: "https://hua-shen.org/",
    img: "hua.png",
    twitter: "https://x.com/huashen218",
    linkedin: "https://www.linkedin.com/in/hua-shen/",
    type: "Organizer",
    description:
      "Hua Shen is an Assistant Professor of Computer Science at NYU Shanghai and New York University " +
      "She is leading the bidirectional human-AI alignment projects and workshops with collaborators. " + 
      "Her research is rooted in HCI and intersects with various AI fields, such as NLP, Speech and Computer Vision. " + 
      "She empowers humans to interactively explain, evaluate, and collaborate with AI, and incorporates human feedback into improving AI. " +
      "She received multiple awards, including 2023 Rising Stars of Data Science,  2023 Google Research Science Conference Scholarships, AIED'24 Best Paper, CSCW'23 Best Demo, IUI'23 Best Paper Honorable Mention. She also served as Associate Chairs for CHI, CHI LBW, Program Committees for ACL, EMNLP, and more."
  },
  {
    name: "Divy Thakkar",
    affliation: "Google DeepMind",
    webpage: "https://divythakkar.com/",
    img: "divy.png",
    twitter: "https://x.com/divy93t",
    linkedin: "https://www.linkedin.com/in/divythakkar/",
    type: "Organizer",
    description:
      "Divy Thakkar is a Staff Program Manager and Researcher at Google DeepMind, where he is building new interactions and human-ai collaboration mechanisms for Gemini. His research has earned recognition at top HCI conferences, including CHI and CSCW. Thakkar completed his Ph.D. in Computer Science at City St. Georges, University of London."
  },
  {
    name: "Gordon Dai",
    affliation: "NYU Shanghai / New York University",
    webpage: "https://scholar.google.com/citations?user=E8wK4goAAAAJ", // TODO: replace with personal site if available
    img: "gordon.jpg",
    twitter: "", // TODO: confirm handle
    linkedin: "https://www.linkedin.com/in/gordon-dai-22937a1b0/",
    type: "Organizer",
    description:
      "Gordon Dai is a Ph.D. student at the NYU Courant Institute of Mathematics, Computing, and Data Science, advised by Hua Shen and Joan Bruna. " +
      "He studies the dynamics between and within machine learning systems and society. " +
      "His first-authored works have been accepted to top AI/ML conferences with awards and covered by MIT Technology Review and China Youth Daily. " +
      "He co-authored the AI ethics comic book \"Humans, Ethics, and Robots: A Book for Teenagers by Teenagers\" (Peking University Press, 2023) with Microsoft Asia Pacific, and founded DeCivAI, a student-oriented research start-up studying collective decision-making and social simulations of AI agents."
  },
  {
    name: "Vivek Myers",
    affliation: "UC Berkeley",
    webpage: "https://people.eecs.berkeley.edu/~vmyers/",
    img: "vivek.jpg",
    twitter: "https://x.com/vivek_myers",
    linkedin: "https://www.linkedin.com/in/vivek-myers/",
    type: "Organizer",
    description:
      "Vivek Myers is a Ph.D. student at Berkeley Artificial Intelligence Research (BAIR), advised by Anca Dragan and Sergey Levine and supported by an NDSEG fellowship. " +
      "His research focuses on reinforcement learning, human-AI interaction, and robotics. " +
      "He has experience organizing research activities and workshops that bring together students and researchers in human-AI interaction and robotics. " +
      "He earned his bachelor's degree in Computer Science and Mathematics from Stanford University, where he conducted research with Dorsa Sadigh."
  },
  {
    name: "Nick Haber",
    affliation: "Stanford University",
    webpage: "https://ed.stanford.edu/faculty/nhaber",
    img: "nick.jpg",
    twitter: "https://x.com/nickhaber",
    linkedin: "https://www.linkedin.com/in/nick-haber-90922b76/",
    type: "Organizer",
    description:
      "Nick Haber is an Assistant Professor at the Stanford Graduate School of Education and, by courtesy, Computer Science. " +
      "After receiving his PhD in mathematics on Partial Differential Equation theory, he worked on Sension, a company applying computer vision to online education, and co-founded the Autism Glass Project at Stanford. " +
      "His research group develops AI systems that mimic and model how people learn early in life through play, social interaction, and curiosity. " +
      "Recent work explores the capabilities and failure modes of social reasoning in LLM-based systems, such as those seen in therapy, persuasion/manipulation, and delusional spirals."
  },
  {
    name: "Joan Bruna",
    affliation: "New York University",
    webpage: "https://cims.nyu.edu/~bruna/",
    img: "joan.jpg",
    twitter: "https://x.com/joanbruna",
    linkedin: "https://www.linkedin.com/in/joanbruna/",
    type: "Organizer",
    description:
      "Joan Bruna is a Full Professor of Computer Science, Data Science, and Mathematics (affiliated) at the Courant Institute and the Center for Data Science, New York University. " +
      "He belongs to the CILVR group and co-founded the MaD (Math and Data) group, and was a Member of the Institute for Advanced Study in Spring 2020. " +
      "His research spans machine learning, signal processing, and high-dimensional statistics, with particular interest in the mathematical foundations of ML—optimization, representation, and statistical aspects—and applications to computational science such as geophysics and climate modeling. " +
      "He is also a Visiting Scholar at the Flatiron Institute (Simons Foundation), Center for Computational Mathematics."
  },
  {
    name: "Dawn Song",
    affliation: "UC Berkeley",
    webpage: "https://dawnsong.io/",
    img: "dawn.png",
    twitter: "https://x.com/dawnsongtweets",
    linkedin: "https://www.linkedin.com/in/dawn-song-51586033/",
    type: "Organizer",
    description:
      "Dawn Song is a Professor in the Department of Electrical Engineering and Computer Science at UC Berkeley. " +
      "Her research interests lie in AI and deep learning, blockchain/web3, and security and privacy. " +
      "She is the recipient of the MacArthur Fellowship, Guggenheim Fellowship, NSF CAREER Award, Alfred P. Sloan Research Fellowship, MIT Technology Review TR-35 Award, and multiple Test-of-Time and Best Paper Awards from top conferences in computer security and deep learning. " +
      "She is an ACM Fellow and IEEE Fellow, ranked the most-cited scholar in computer security (AMiner), and a serial entrepreneur named to Inc.'s Female Founder 100 and the Wired25 List of Innovators."
  },
  {
    name: "Yoshua Bengio",
    affliation: "Mila / LawZero / Université de Montréal",
    webpage: "https://yoshuabengio.org/",
    img: "yoshua.png",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/yoshuabengio/",
    type: "Organizer",
    description:
      "Yoshua Bengio is a 2018 A.M. Turing Award laureate and one of the most highly cited researchers in AI. " +
      "He is a Full Professor at Université de Montréal, Founder and Scientific Advisor of Mila – Quebec AI Institute, and Co-President and Scientific Director of LawZero. " +
      "A pioneer of modern deep learning, his foundational contributions to neural networks, representation learning, and generative modeling have shaped contemporary AI. " +
      "His honors include the Killam Prize and Herzberg Gold Medal; he serves on the UN Scientific Advisory Board, was named to TIME's 100 Most Influential People in 2024, and chairs the International Scientific Report on the Safety of Advanced AI."
  }
];

const cfp: CFP = {
  description: "",
  invitation: 
    "We invite researchers and practitioners from academia and industry to join our Workshop on Dynamic Alignment in Human-AI Coupled Systems at NeurIPS 2026. As AI systems shift from single-turn response tools to long-term interactive actors in high-stakes domains, alignment can no longer be treated as a static, one-time objective: human states, agent policies, feedback signals, objectives, and evaluation criteria co-evolve over time. This workshop provides a forum to develop the theoretical, algorithmic, and evaluative foundations of dynamic alignment — spanning AI alignment, machine learning, human-AI interaction, cognitive science, social computing, law, governance, and philosophy. The one-day hybrid workshop features five keynotes, a panel discussion, spotlight talks, two poster sessions, and Structured Thematic Breakout Discussions at on-site interaction stations, whose outcomes will feed into a potential post-workshop white paper. We welcome submissions from all relevant disciplines; accepted work will be presented as spotlight talks or posters, as decided by the program committee. Key workshop topics include:",
  notes: (
    <>
      All accepted papers will be published on the workshop website (non-archival). As long as the
      submissions are highly relevant to our workshop, we{" "}
      <b className="text-orange">encourage dual submissions, even papers that were accepted by somewhere else</b>. The
      program committee will select 3-5 Workshop Awards announced before closing remarks. We plan to invite participants to collaborate on a joint post-workshop white
      paper on dynamic alignment.
    </>
  ),
  scope: (
    // <>
    //   <ul>
    //     <li>
    //       <b className="text-framework">TODO: Topic Area 1:</b> TODO description of this topic area.
    //     </li>
    //     <li>
    //       <b className="text-framework">TODO: Topic Area 2:</b> TODO description of this topic area.
    //     </li>
    //   </ul>
    // </>
    <>
      <ul>
        <li>
          <b className="text-orange">Foundations of Dynamic Alignment:</b> Conceptual and theoretical work
          clarifying alignment in systems where human states, agent policies, feedback signals, objectives, and
          environments co-evolve.
          <div>
            <span className="text-keyword">- <b>Research Questions</b></span>: How should alignment be defined and
            formalized when humans are not fixed feedback oracles and agents are not static tools? What
            theoretical tools characterize stability, path dependence, and long-run outcomes of coupled human-AI
            dynamics?
          </div>
          <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: stability, path dependence, endogenous
            feedback, influenceable preferences, dynamical systems, etc.
          </div>
        </li>
        <li>
          <b className="text-orange">Specification, Objectives, and Evolving Preferences:</b> Methods for
          specifying and updating goals, values, norms, preferences, and safety constraints under changing human
          and social contexts.
          <div>
            <span className="text-keyword">- <b>Research Questions</b></span>: How can objectives and safety
            constraints remain well-specified as human and social contexts change? How should systems handle
            disagreement, preference drift, collective values, and normative uncertainty?
          </div>
          <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: preference drift, value specification,
            normative uncertainty, collective values, pluralistic alignment, etc.
          </div>
        </li>
        <li>
          <b className="text-orange">Learning, Adaptation, and Feedback Dynamics:</b> Studies of how agents
          learn from repeated human interaction through RL, human-in-the-loop learning, memory, and lifelong
          adaptation.
          <div>
            <span className="text-keyword">- <b>Research Questions</b></span>: How do agents learn and adapt under
            non-stationary, noisy, or strategic human feedback? What learning dynamics emerge from repeated
            interaction, memory, and lifelong adaptation?
          </div>
          <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: RLHF, human-in-the-loop learning,
            non-stationary feedback, lifelong learning, multi-turn RL, etc.
          </div>
        </li>
        <li>
          <b className="text-orange">Evaluation, Benchmarks, and Failure Discovery:</b> Metrics, benchmarks,
          simulations, audits, and red-teaming methods for long-horizon and interactive alignment.
          <div>
            <span className="text-keyword">- <b>Research Questions</b></span>: How can we detect and measure
            safety-critical failures that only emerge over long-horizon interaction, such as sycophancy,
            overreliance, trust miscalibration, value drift, and manipulation? What benchmarks and simulations
            capture coupled human-AI dynamics?
          </div>
          <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: long-horizon evaluation, red-teaming,
            audits, dark patterns, sycophancy, overreliance, multi-agent risks, etc.
          </div>
        </li>
        <li>
          <b className="text-orange">Control, Intervention, and Monitoring:</b> Approaches for maintaining or
          restoring alignment after deployment.
          <div>
            <span className="text-keyword">- <b>Research Questions</b></span>: How can alignment be maintained or
            restored once systems are deployed and co-evolving with users? What runtime monitoring, oversight, and
            rollback mechanisms scale to real-world coupled systems?
          </div>
          <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: runtime monitoring, scalable oversight,
            adaptive safeguards, rollback, human control interfaces, incident analysis, etc.
          </div>
        </li>
        <li>
          <b className="text-orange">Collective, Multi-Agent, and Societal Dynamics:</b> Work on alignment
          across multiple humans, agents, organizations, or institutions.
          <div>
            <span className="text-keyword">- <b>Research Questions</b></span>: How does alignment behave across
            populations of humans and agents — under coordination, competition, collusion, and social influence?
            How do performative effects, governance interfaces, and institutional constraints shape alignment at
            scale?
          </div>
          <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: multi-agent systems, social influence,
            performative prediction, governance, institutional constraints, etc.
          </div>
        </li>
        <li>
          <b className="text-orange">Alignment in Domain-Driven and High-Stakes Applications:</b> Research
          grounded in real-world settings where long-term interaction and safety constraints shape alignment.
          <div>
            <span className="text-keyword">- <b>Research Questions</b></span>: How do long-term interaction and
            safety constraints shape alignment in domains such as education, healthcare, mental health, scientific
            discovery, robotics, recommender systems, and public-sector decision-making?
          </div>
          <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: healthcare, mental health, education,
            agentic science, robotics, recommender systems, public-sector AI, etc.
          </div>
        </li>
      </ul>
    </>
  ),
  dates: [
    {
      date: "September 4, 2026",
      type: "Submission",
    },
    {
      date: "September 29, 2026",
      type: "Notification",
    },
    {
      date: "October 29, 2026",
      type: "Camera ready",
    },
    {
      date: "December 11 or 12, 2026",
      type: "NeurIPS Workshop",
    },
  ],
  submit: {
    platform: {
      name: "OpenReview Submission Portal",
      url: "https://openreview.net/group?id=NeurIPS.cc/2026/Workshop/BiAlign#tab-your-consoles",
    },
    format: (
      <span>
        {" "}
        NeurIPS 2026 <a href={`${process.env.PUBLIC_URL}/images/NeurIPS_2026_BiAlign_Workshop_Template.zip`}>BiAlign Workshop Templates .zip</a> Download. 
        
      </span>
    ),
    length: (
      <span>
        {" "}
        We call for <b>2-page</b>(tiny), <b>4-page</b> (short), and <b>9-page</b> (long) papers,  excluding references, fully
        anonymized. 
      </span>
    ),
    type: (
      <span>
        {" "}
        Non-archival. Accepted work will be presented as spotlight talks (4 selected) or posters across two
        poster sessions.
      </span>
    ),
  },
};

const pcs: ProgramCommittee[] = [
  // Sorted alphabetically by first name.
  { name: "Aayush Kumar,", affiliation: "PhD @Massachusetts Institute of Technology" },
  { name: "Alessandro Maria Selvitella,", affiliation: "Faculty @Purdue University Fort Wayne" },
  { name: "Ali Mahdipour Shirayeh,", affiliation: "Researcher @University Health Network & Roche-Genentech" },
  { name: "Alysa Ziying Tan,", affiliation: "Postdoc @Nanyang Technological University" },
  { name: "Anindya Das Antar,", affiliation: "Postdoc @University of Notre Dame" },
  { name: "Anisha Ramakrishna Yarlapati,", affiliation: "PhD @Purdue University, Product Manager @Adobe" },
  { name: "Aritra Dasgupta,", affiliation: "Faculty @New Jersey Institute of Technology" },
  { name: "Ashish Mehta,", affiliation: "Postdoc @Stanford University" },
  { name: "Dipesh Tharu Mahato,", affiliation: "PhD @New York University" },
  { name: "Elena Ericheva,", affiliation: "AI Safety Scientist @JetBrains" },
  { name: "Giulia Frascaria,", affiliation: "PhD @University of Zurich" },
  { name: "Hengyu Liu,", affiliation: "Faculty @Aalborg University" },
  { name: "Jared Moore,", affiliation: "PhD @Stanford University" },
  { name: "Kaushiki Kansara,", affiliation: "Faculty @Arizona State University" },
  { name: "Lin Zhang,", affiliation: "Postdoc @Johns Hopkins University" },
  { name: "Mikayel Sukiasyan,", affiliation: "Researcher @Amazon" },
  { name: "Qianyu Julie Zhu,", affiliation: "PhD @Massachusetts Institute of Technology" },
  { name: "Shahram Najam Syed,", affiliation: "Technical Lead @Invisible AI" },
  { name: "Xiaohu Zhu,", affiliation: "Researcher @Center for Safe AGI" },
  { name: "Yiyun Su,", affiliation: "Researcher @Axon" },
  { name: "Zeyu Zhang,", affiliation: "PhD @The Chinese University of Hong Kong" },
  { name: "Zhihong Cui,", affiliation: "Postdoc @University of Oslo" },
  { name: "Ziwei Hong,", affiliation: "Researcher @University of Pennsylvania" },
];


export const schedule: Schedule[] = [
  {
    start: "",
    end: "🚀 Morning Session",
    title: "",
  },
  {
    start: "08:45",
    end: "09:00 (15min)",
    title: "Welcome and Opening Remarks",
  },
  {
    start: "09:00",
    end: "09:30 (30min)",
    title: "Keynote Speaker 1",
  },
  {
    start: "09:30",
    end: "10:00 (30min)",
    title: "Structured Thematic Breakout Discussions – Session I",
  },
  {
    start: "10:00",
    end: "10:30 (30min)",
    title: "Keynote Speaker 2",
  },
  {
    start: "10:30",
    end: "11:30 (60min)",
    title: "Poster Session I (Concurrent Coffee Break)",
  },
  {
    start: "11:30",
    end: "12:00 (30min)",
    title: "Keynote Speaker 3",
  },
  {
    start: "12:00",
    end: "13:20 (80min)",
    title: "Lunch Break",
  },
  {
    start: "",
    end: "🚀 Afternoon Session",
    title: "",
  },
  {
    start: "13:20",
    end: "13:50 (30min)",
    title: "Keynote Speaker 4",
  },
  {
    start: "13:50",
    end: "14:20 (30min)",
    title: "Structured Thematic Breakout Discussions – Session II",
  },
  {
    start: "14:20",
    end: "15:00 (40min)",
    title: "Spotlight Paper Session (10min × 4)",
  },
  {
    start: "15:00",
    end: "15:40 (40min)",
    title:
      "Panel Discussion: Dynamic Alignment in Human-AI Coupled Systems (with Keynote Speakers and Organizers)",
  },
  {
    start: "15:40",
    end: "16:10 (30min)",
    title: "Keynote Speaker 5",
  },
  {
    start: "16:10",
    end: "16:50 (40min)",
    title: "Poster Session II (Concurrent Coffee Break)",
  },
  {
    start: "16:50",
    end: "17:00 (10min)",
    title: "Paper Award Announcement and Closing Remarks",
  },
];

const speakers: Speaker[] = [
  // Internal status notes (not rendered): Cappelen — confirmed, virtual. Rieser — confirmed
  // virtual, but our side still to confirm after in-person speakers are prioritized.
  // Krishnan and Sekhon — positively responded, on-site, not yet confirmed.
  {
    name: "Jasjeet Sekhon",
    affliation: "Google DeepMind",
    webpage: "https://en.wikipedia.org/wiki/Jasjeet_S._Sekhon",
    img: "jasjeet.png",
    description:
      "Jasjeet Sekhon is Chief Strategy Officer at Google DeepMind, where he oversees strategic initiatives spanning research, commercialization, and policy in support of safe AGI development. He joined in 2026 from Bridgewater Associates, where he was Chief Scientist and Head of AI and helped build the firm's AIA Labs research unit, and has previously held professorships at Harvard, UC Berkeley, and Yale. His work bridges causal inference, statistics, political economy, and machine learning."
  },
  {
    name: "Herman Cappelen",
    affliation: "The University of Hong Kong",
    webpage: "https://www.hermancappelen.net/",
    img: "herman.png",
    description:
      "Herman Cappelen is Chair Professor of Philosophy at the University of Hong Kong and Director of the AI & Humanity Lab. He holds a BA from the University of Oxford and a PhD in philosophy from UC Berkeley, and previously held positions at Oxford, the University of St Andrews, and the University of Oslo. His work spans conceptual engineering, the philosophy of language, philosophical methodology, and the philosophy of artificial intelligence, bringing a philosophical lens to what it means for AI systems and human concepts to align."
  },
  {
    name: "Verena Rieser",
    affliation: "Google DeepMind",
    webpage: "https://sites.google.com/site/verenateresarieser/",
    linkedin: "https://www.linkedin.com/in/verena-rieser-3590b86/",
    img: "verena.png",
    description:
      "Verena Rieser is a Senior Staff Research Scientist at Google DeepMind, where she founded the VOICES (Voices-of-all in Alignment) team within the GenAI unit, a core contributor to Gemini focused on model safety and usability across diverse communities. Before joining DeepMind in 2023, she was a full Professor at Heriot-Watt University in Edinburgh; she holds a PhD from Saarland University and was a postdoctoral researcher at the University of Edinburgh. Her research spans dialogue systems, natural language generation, conversational RL agents, and evaluation methodology, with recent work on aligning AI with diverse views of what is safe and beneficial."
  },
  {
    name: "Sriram Krishnan",
    affliation: "Former White House Senior Policy Advisor for AI",
    webpage: "https://en.wikipedia.org/wiki/Sriram_Krishnan",
    img: "sriram.png",
    description:
      "Sriram Krishnan served as Senior Policy Advisor for Artificial Intelligence at the White House Office of Science and Technology Policy from 2025 until mid-2026, where he helped shape U.S. federal AI strategy, including arrangements giving the government early access to frontier models for capability and security assessment. He is an entrepreneur and venture capitalist who previously held senior product roles at Microsoft, Facebook, Twitter, and Snap. He brings a policy and governance perspective on alignment that is rarely represented in technical alignment venues."
  }
];

const orals: Oral[] = [
  // TODO: Add accepted papers here, e.g. { link: "/neurips2026-pdfs/1.pdf", title: "...", authors: "..." },
];

const poster: Poster[] = [
  // TODO: Add accepted posters here.
];

const tiny: Tiny[] = [
  // TODO: Add accepted short/tiny papers here.
];

export const NeurIPS2026: Metadata = {
  overview,
  organizers,
  chiorganizers,
  orals,
  poster,
  tiny,
  cfp,
  pcs,
  schedule,
  speakers,
};
