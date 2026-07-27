import { Alert } from "@material-ui/lab";
import { NavLink } from "react-router-dom";
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
} from "./Interfaces";
const format = "documentclass [manuscript, review, anonymous] {acmart}";
const overview: Overview = {
  contact: "",
  slack: "https://join.slack.com/t/bi-alignworkshops/shared_invite/zt-2vpuf45n7-zP8DcmoRwjqfCxVQ4f5_Kw",
  acronym: "BiAlign",
  year: "2026",
  location: "Barcelona",
  date: "15 April, 2026",
  fullName: "Workshop on Human-AI Interaction Alignment",
  description: (
    <>
    <p>
      This <a href="https://chi2026.acm.org/workshops/accepted/#w37-humanai-interaction-alignment-designing-evaluating-and-evolving-valuecentered-ai-for-reciprocal-humanai-futures" target="_blank">CHI 2026 BiAlign Workshop</a> focuses on <b className="text-framework">bidirectional</b> <b className="text-human">Human</b><b className="text-align">↔</b><b className="text-ai">AI</b> <b className="text-framework">alignment</b>, a paradigm shift in how we approach the challenge of human-AI alignment, which emphasizes the dynamic, complex, and evolving alignment process between humans and AI systems. 
      This is grounded on the <b className="text-highlight">"bidirectional human-AI alignment"</b> framework (see <a href="https://arxiv.org/pdf/2406.09264" target="_blank">Definition</a> and <a href="https://hai-alignment-course.github.io/tutorial/" target="_blank">NeurIPS Tutorial</a>) derived from a <a href="https://arxiv.org/abs/2406.09264" target="_blank">systematic survey</a> of over 400 interdisciplinary alignment papers in Machine Learning (ML), Human Computer Interaction (HCI), Natural Language Processing (NLP), more domains.
      Particularly, it involves two directions to  maximize its benefits for human society.
    </p>
    <ul>
        <li>
          <b className="text-framework">Aligning AI with Humans</b> (<b className="text-ai">AI</b>-centered perspective): focuses on integrating human specifications into training, steering, customizing, and monitoring AI systems;
        </li>
        <li>
        <b className="text-framework">Aligning Humans with AI</b> (<b className="text-human">Human</b>-centered perspective): aims to preserve human agency and empower humans to critically evaluate, explain, and collaborate with AI systems.
        </li>
      </ul>
    </>
  ),
  challenge: (
    <>
    <p>
      The rapid advancements in general-purpose AI has precipitated the urgent need to align these systems with values, ethical principles, and goals that match the context of use, i.e., for individuals using an AI system, and for the holistic society at large.
    </p>
    <p>
      The core goals of this workshop <b className="text-framework">are fourfold</b>: 
      <b className="text-framework"> (1)</b> Operationalize Human and Societal Values;
      <b className="text-framework"> (2)</b> Advance Design and Interaction Mechanisms;
      <b className="text-framework"> (3)</b> Explore Dynamic Evaluation Approaches;
      <b className="text-framework"> (4)</b> Foster Interdisciplinary Collaboration and Build Community.



      {/* <b className="text-framework"> (1)</b> broadening the current understanding of AI alignment and inviting more researchers to collectively explore the bidirectional human-AI alignment studies; 
      <b className="text-framework"> (2)</b> fostering interdisciplinary collaboration between researchers in multi-disciplinary domains, such as AI, HCI, and social sciences, creating a platform for exchange and innovation.  */}
    </p>
    </>
    ),
  goal: (
    <>
    <p>This workshop aims to explore the design space from a comprehensive view of human-AI interaction alignment.</p>
    </>
  ),
  scope: (
    <>
      <p>This workshop aims to explore the design space of bidirectional human-AI alignment from a comprehensive view, calling for submissions (2-page, 4-page, or 8-page) from various disciplines and topics, including but not limited to (see all in <b className="text-highlight" style={{ color: "red" }}><a href="https://bialign-workshop.github.io/2026/cfp" target="_blank">Call For Papers</a></b>):</p>
      <ul>
        <li>
          <b className="text-framework">Value-Centered Alignment Objectives:</b> Embedding fairness, agency, equity, and responsibility into AI systems 
        </li>
        <li>
          <b className="text-framework">Novel Alignment Demands for Responsible AI:</b> Human-centered alignment demands and goals for responsible AI
        </li>
        <li>
          <b className="text-framework">Designing and Interacting for Alignment:</b> Interfaces, explanation, and participatory methods for steering AI;
        </li>
        <li>
          <b className="text-framework">Evaluating Alignment and Societal Impacts:</b> Metrics and frameworks for technical and social assessment;
        </li>
        <li>
          <b className="text-framework">Dynamic Co-Evolution of Human-AI Futures:</b> Strategies to maintain alignment as humans-AI mutually adapt;
        </li>
      </ul>
    </>
  ),
  backgroundImg: "chi2026background.png",
  confLogoImg: "iclr_logo.png",
  logoImg: "logo.png",
  logoWithWord: "chi2026landinglogo.png",
  confName: "ICLR",
};


const organizers: People[] = [];


const chiorganizers: CHIPeople[] = [
  {
    name: "Hua Shen",
    affliation: "NYU Shanghai & NYU / @huashen218",
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
    name: "Tiffany Knearem ",
    affliation: "MBZUAI / @tknearem",
    webpage: "https://tknearem.wixsite.com/tknearem",
    img: "tiffany.png",
    twitter: "https://x.com/tknearem",
    linkedin: "https://bsky.app/profile/tknearem.bsky.social",
    type: "Organizer",
    description:
      "Tiffany Knearem is a User Experience Researcher on the Material Design team at Google. Her research focus is on product designer-developer collaboration, creativity support tooling and opportunities for AI in the user interface (UI) design space. She holds a PhD in Information Sciences and Technologies with emphasis on Human-Computer Interaction from Pennsylvania State University, advised by Dr. John M. Carroll. She co-organized the CHI 2024 workshop on Computational UI."
  },
  {
    name: "Divy Thakkar",
    affliation: "Google DeepMind/ @divy93t",
    webpage: "https://sites.google.com/view/divythakkar/home",
    img: "divy.png",
    twitter: "https://x.com/divy93t",
    linkedin: "https://www.linkedin.com/in/divythakkar/",
    type: "Organizer",
    description:
      "Divy Thakkar is a Staff Program Manager and Researcher at Google DeepMind, where he is building new interactions and human-ai collaboration mechanisms for Gemini. His research has earned recognition at top HCI conferences, including CHI and CSCW. Thakkar completed his Ph.D. in Computer Science at City St. Georges, University of London."
  },
  {
    name: "Pat Pataranutaporn",
    affliation: "MIT / @patpat_mit",
    webpage: "https://www.media.mit.edu/people/patpat/overview/",
    img: "pat.png",
    twitter: "https://x.com/patpat_mit",
    linkedin: "https://www.linkedin.com/in/patpataranutaporn/",
    type: "Organizer",
    description:
      "Pat Pataranutaporn is an Assistant Professor at the MIT Media Lab, where he directs the Cyborg Psychology Research Group and co-directs the Advancing Humans with AI (AHA) Program. His research develops AI systems that foster human flourishing, including pioneering studies on generative AI for learning and self-development. His work has been published in Nature Machine Intelligence, ACM SIGCHI, and SIGGRAPH, PNAS, and featured in outlets such as The New York Times, Scientific American, and MIT Tech Review. Recognized by TIME’s Best Inventions of 2023 and Fast Company’s World Changing Ideas, his projects have been exhibited internationally and he has collaborated with NASA, OpenAI, Microsoft Research, and others. He also co-designed one of MIT’s first courses on Generative AI and co-created Netflix’s 2024 sci-fi anthology Tomorrow and I."
    },
    {
    name: "Anoop K. Sinha",
    affliation: "Google Research / @sinhaanoop",
    webpage: "https://research.google/people/anoopsinha/?&type=google",
    img: "anoop.png",
    // twitter: "https://x.com/huashen218",
    linkedin: "https://www.linkedin.com/in/sinhaanoop",
    type: "Organizer",
    description:
      "Anoop Sinha is currently a Research Director focusing on AI and Future Technologies at Google, where he leads research into new interfaces and previously directed cross-company AI initiatives involving data and development. Holding a Ph.D. from the University of California, Berkeley, his career spans significant leadership roles in AI and HCI across major tech companies, including Head of Siri ML and Knowledge at Apple and Sr. Applied Research Scientist Manager at Meta (FAIR X - HCI & AI). His expertise lies at the intersection of machine learning, human-computer interaction, search quality, and knowledge representation."
  },
  {
    name: "Yike (Cassandra) Shi",
    affliation: "CMU & NYU Shanghai / @yike-cassandra-shi",
    webpage: "https://www.linkedin.com/in/yike-cassandra-shi",
    img: "yike.png",
    // twitter: "https://x.com/huashen218",
    linkedin: "https://www.linkedin.com/in/yike-cassandra-shi",
    type: "Organizer",
    description:
      "Yike (Cassandra) Shi is a Research Associate jointly affiliated with New York University and Carnegie Mellon University. Her research focuses on requirements-driven prompting for LLMs, where she developed a web-based system that compiles user requirements into optimized prompts and integrates automated evaluation mechanisms. She also has industry experience as an AI Infrastructure Intern at DeepLang AI, where she optimized CUDA kernels and improved inference efficiency for quantized models. Shi’s academic projects span speech recognition, face recognition, and Transformer-based speech-to-text systems, as well as systems-level programming, database design, and game development. She has been recognized on the Dean’s List across multiple semesters." 
  },
  {
    name: "Jenny T. Liang",
    affliation: "CMU / @jennytliang",
    webpage: "https://jennyliang.me/",
    img: "jenny.png",
    twitter: "https://x.com/jennytliang",
    linkedin: "https://www.linkedin.com/in/jenny-liang",
    type: "Organizer",
    description:
      "Jenny T. Liang is a PhD student in Software Engineering at Carnegie Mellon University, advised by Brad A. Myers. Her re- search sits at the intersection of software engineering, HCI, and applied machine learning, focusing on how developers interact with AI-powered tools and how to design more usable systems. She has published in leading venues such as ICSE, FSE, and CHI, receiving awards including the ACM SIGSOFT Distinguished Pa- per Award. In addition to her research, Jenny has been active in community-building — organizing workshops at ICSE and CHI that bring together researchers across software engineering, HCI, and AI. She also has industry experience through internships at Ap- ple, Microsoft, and AI2, and is dedicated to mentoring and service within the academic community."
      },
  {
    name: "Lama Ahmad",
    affliation: "OpenAI / @_lamaahmad",
    webpage: "https://asiafoundation.org/people/lama-ahmad/",
    img: "lama.png",
    twitter: "https://x.com/_lamaahmad?lang=en",
    linkedin: "https://www.linkedin.com/in/lamaahmad",
    type: "Organizer",
    description:
      "Lama Ahmad, Ph.D. is a researcher and technology profes- sional currently leading partnerships and research on the risks and social impacts of AI at OpenAI’s Safety Systems team. She also serves as a Term Trustee for The Asia Foundation, guiding gover- nance and strategy. Previously, Lama worked on Facebook’s Open Research & Transparency team, focusing especially on democracy, elections, and the societal consequences of social media platforms. During her Luce Scholar year, she studied the ethics of data-driven technologies at the U.N. Global Pulse Lab in Jakarta, applying human-centered design across Southeast Asia. She is a passion- ate advocate for equity, inclusion, and interdisciplinary approaches in tech and policymaking."
  },
  {
    name: "Tanu Mitra",
    affliation: "University of Washington / @tanmit",
    webpage: "https://faculty.washington.edu/tmitra/",
    img: "tanu.png",
    twitter: "https://x.com/tanmit",
    bluesky: "https://bsky.app/profile/tanumitra.bsky.social",
    type: "Organizer",
    description:
      "Tanu Mitra is an Associate Professor at the Information School at the University of Washington, and co-founded the Responsibility in AI Systems and Experiences (RAISE) Center. Her research blends human-centered data science and social science principles to develop new knowledge, methods, and systems to defend against the epistemic risks of online mis(dis)information, bias, hate and harms. Tanu's work has been supported by grants from the NSF, NIH, DoD, Social Science One, and other Foundations. Her research has been recognized through multiple awards and honors, including an NSF-CRII, an early career ONR-YIP, Adamic-Glance Distinguished Young Researcher award and Virginia Tech College of Engineering Outstanding New Assistant Professor award, along with several best paper awards. Dr. Mitra currently serves on Spotify's safety advisory board and has previously served on the advisory board of the Social Science Research Council's Social Data Initiative. "
  },
  {
    name: "Brad A. Myers",
    affliation: "CMU / @bradamyers",
    webpage: "https://www.cs.cmu.edu/~bam/",
    img: "brad.png",
    twitter: "https://x.com/bradamyers",
    linkedin: "https://www.linkedin.com/in/bradamyers",
    type: "Organizer",
    description:
      "Brad A. Myers, Ph.D. is the Charles M. Geschke Director of the Human-Computer Interaction Institute and Professor in the School of Computer Science at Carnegie Mellon University, with an affili- ated appointment in the Software and Societal Systems Department. He is an ACM Fellow, IEEE Life Fellow, CHI Academy member, and recipient of the 2017 ACM SIGCHI Lifetime Achievement Award in Research. His book, Pick, Click, Flick! won the 2025 CBI HCI History Prize. Myers has authored or edited more than 550 publications, including three books, with 19 Best Paper Awards and 6 Most In- fluential Paper Awards. He has consulted for over 90 companies on UI design and regularly teaches HCI and software design. His research spans interaction techniques, developer experience, API usability, end-user software engineering, programming by example, and visual programming. He has helped organize and run multiple workshops and conferences." 
  },
  {
  name: "Yang Li",
  affliation: "Google DeepMind / @yangli169",
  webpage: "https://yangli169.github.io/yangl.org/",
  img: "yang.png",
  twitter: "https://x.com/yangli169",
  // bluesky: "",
  type: "Organizer",
  description:
    "Yang Li is a Senior Staff Research Scientist at Google DeepMind, and an affiliate faculty member at University of Washington. His research lies at the intersection of HCI and AI, focusing on general deep learning research and models for solving human interactive intelligence problems and improving user experiences. He earned a Ph.D. degree in Computer Science from the Chinese Academy of Sciences, and conducted postdoctoral research at UC Berkeley EECS. Yang has extensively published in top venues across both the HCI and ML fields, including CHI, UIST, ICML, ACL, CVPR, NeurIPS, ICLR and KDD, and has constantly served as area chairs or senior area chairs across the HCI and ML fields, including ICLR 2025, NeurIPS 2024, ICML 2024, and more. Yang is an editor of the Springer book on AI for HCI: A Modern Approach, and an organizer of multiple workshops that bridges the HCI and AI/ML field, including the first AI\&HCI workshp at ICML." 
  },
];


const cfp: CFP = {
  description: "",
  invitation: "We invite researchers and practitioners from academia and industry to join our Bidirectional Human-AI Alignment (BiAlign) Workshop at CHI 2026. As AI systems increasingly permeate everyday life, alignment requires dynamic, reciprocal processes in which humans and AI adapt to each other over time. This workshop provides an interactive forum to explore value-centered alignment, human-AI interaction design, evaluation methods, and strategies for dynamic co-evolution. The workshop will feature paper presentations, poster sessions, and collaborative group activities such as on-the-spot paper writing, concept mapping, and solution ideation. These activities are designed to foster interdisciplinary knowledge creation, critical discussion, and co-development of new research directions. We welcome submissions of position papers, posters, or brief research notes that address human-AI alignment from HCI, AI, psychology, social sciences, or related domains. Accepted participants are expected to attend the workshop, with at least one organizer per accepted submission present. Key workshop topics include:",
  notes: "All accepted papers will be published on the workshop website. We plan to invite the authors of accepted papers to collaborate on a joint prospective paper on human–AI alignment.",
  scope: (
    <>
      <ul>
        <li>
          <b className="text-framework">Value-Centered Alignment Objectives:</b> Explores which human and societal values should guide reciprocal human-AI alignment and how these values can be articulated and translated into technical and design processes.
            <div>
            <span className="text-keyword">- <b>Research Questions</b>:</span>: What fundamental human and societal values should guide reciprocal human-AI alignment? In what ways might HCI contribute to the articulation and translation of values into technical and design processes?
            </div>
            <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: pluralistic values, human agency, cultural perspectives, value-sensitive design, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Developing Interfaces and Interactions for Alignment:</b> Investigates design mechanisms—such as interfaces, interaction modalities, explanation systems, and participatory methods that empower humans to steer, critique, and co-create with AI systems.
          <div>
            <span className="text-keyword">- <b>Research Questions</b>:</span>: What design mechanisms can help humans shape and steer AI behavior? What role do co-creation and participatory design methods play in aligning AI with evolving human needs? How do we uplift and retain human agency via effective human-AI collaboration?
            </div>
            <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: design interactive alignment, UX for AI, participatory design, human-AI collaboration, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Evaluating Alignment and Societal Impacts:</b> Examines frameworks and methodologies for assessing bidirectional alignment, including both technical effectiveness and broader impacts such as trust and social well-being.
          <div>
            <span className="text-keyword">- <b>Research Questions</b>:</span>: How should bidirectional alignment be measured—both technically and socially? What frameworks and methodologies can capture the broader impacts of alignment (e.g., trust, collective well-being, economic impact)?
            </div>
            <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: alignment evaluation, societal impact, trust, responsible AI, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Dynamic Co-Evolution of Human-AI Futures:</b> This topic inConsiders alignment as an evolving process, highlighting strategies for sustaining reciprocal adaptation as both humans and AI change over time and across contexts.
          <div>
            <span className="text-keyword">- <b>Research Questions</b>:</span>: How have alignment goals and practices evolved over time, as humans and AI systems mutually adapted? How can we envision and design for long-term reciprocal futures of human-AI collaboration?
            </div>
            <div>
            <span className="text-keyword">- <b>Keyword Examples</b></span>: alignment at scaladaptability, resilience, lifelong learning, co-evolution, etc.
            </div>
        </li>
      </ul>
    </>
  ),
  dates: [
    {
      date: (
        <span>
          <span
            // style={{
            //   color: "#5f6368",
            //   textDecoration: "line-through",
            //   marginRight: "5px",
            // }}
          >
            February 18, 2026
          </span>
        </span>
      ),
      type: "Submission",
      description:
        "Submission will be reviewed by PC members, in a single-blind manner.",
    },
    {
      date: 
      (
        <span>
          <span
            // style={{
            //   color: "#5f6368",
            //   textDecoration: "line-through",
            //   marginRight: "5px",
            // }}
          >
            March 2nd, 2026
          </span>
        </span>
      ),
      type: "Notification",
    },
    {
      date:
      (
        <span>
          <span
            // style={{
            //   color: "#5f6368",
            //   textDecoration: "line-through",
            //   marginRight: "5px",
            // }}
          >
            March 28, 2026
          </span>
        </span>
      ),
      type: "Camera ready",
    },
    {
      date: "April 15, 2026",
      type: "CHI Workshop",
      description:
        "At least one author must register and attend the workshop in person.",
    },
  ],
  submit: {
    platform: {
      name: "OpenReview Submission Portal",
      url: "https://openreview.net/group?id=ACM.org/CHI/2026/Workshop/BiAlign",
    },
    format: (
      <span>
        {" "}
        {/* CHI 2026 <a href={`${process.env.PUBLIC_URL}/images/iclr_2025_bialign_workshop_template.zip`}>CHI 2026 Submission  Workshop Templates .zip Download</a>.  */}
        Same as <a href="https://chi2026.acm.org/chi-publication-formats/" target="_blank">CHI 2026 Submission Instructions</a>, <b style={{ color: "red" }}>2-column</b>, <b style={{ color: "red" }}>NOT Anonymized</b> format, 
      </span>
    ),
    length: (
      <span>
        {" "}
        {/* CHI 2026 <a href={`${process.env.PUBLIC_URL}/images/iclr_2025_bialign_workshop_template.zip`}>CHI 2026 Submission  Workshop Templates .zip Download</a>.  */}
        We call for <b>2-page</b>(tiny), <b>4-page</b> (short), and <b>8-page</b> (long) papers,  excluding references.
      </span>
    ),
    type: (
      // <span>
      //   {" "}
      // This workshop is optionally archival. Please indicate your selection of an <b>"archival submission"</b> or a <b>"non-archival submission"</b> at the bottom of your OpenReview Submission Portal. The archival option will not influence the review of your submission.
      // </span>
      <span>
        {" "}
      <a href="https://chi2026.acm.org/workshops/accepted/#w37-humanai-interaction-alignment-designing-evaluating-and-evolving-valuecentered-ai-for-reciprocal-humanai-futures" target="_blank">CHI 2026 Accepted Workshop -- W37: Human-AI Interaction Alignment</a>
      </span>
    )
  },
  
};

const pcs = [
  { name: "Aayush Kumar,", affiliation: "Research Fellow at Microsoft" },  
  { name: "Abeer Aldayel,", affiliation: "Assistant Professor at King Saud University" },  
  { name: "Álvaro Fernandez-Quilez,", affiliation: "Associate Professor at University of Stavanger" },  
  { name: "Bhada Yun,", affiliation: "MS student at ETH Zurich" },  
  { name: "Boyang Yang,", affiliation: "Assistant Professor at Yan Shan University" },  
  { name: "Cathy Mengying Fang,", affiliation: "PhD student at MIT" },  
  { name: "Danqing Shi,", affiliation: "Assistant Professor at Lund University" },  
  { name: "Deepak Piskala,", affiliation: "Researcher at Amazon" },  
  { name: "Dilrukshi Gamage,", affiliation: "Postdoc at Tokyo Institute of Technology" },  
  { name: "Eva Paraschou,", affiliation: "PhD student at Technical University of Denmark" },  
  { name: "Georges Hattab,", affiliation: "Lecturer at Freie Universität Berlin" }, 
  { name: "Hao-Chuan Wang,", affiliation: "Associate Professor at University of California, Davis" },  
  { name: "Hariharan Ragothaman,", affiliation: "Researcher at AMD" },  
  { name: "Helena Anna Frijns,", affiliation: "Postdoc at Interdisciplinary Transformation University Austria" },  
  { name: "Hemraj Shobharam Lamkuche,", affiliation: "Senior Assistant Professor at VIT Bhopal" },  
  { name: "Jessica Bo,", affiliation: "PhD student at University of Toronto" },  
  { name: "Katherine Wang,", affiliation: "PhD student at University College London" },  
  { name: "Tao Dong,", affiliation: "Senior Staff UX Researcher at Google" },  
  { name: "Thiemo Wambsganss,", affiliation: "Assistant Professor at Bern University" },  
  { name: "Nicholas Clark,", affiliation: "PhD student at University of Washington" },   
  { name: "Pragya Singh,", affiliation: "Visiting Doctoral Researcher at Aalto University" },  
  { name: "Quoc-Toan Nguyen,", affiliation: "PhD student atTechnische Universität Dortmund" },  
  { name: "Qisen Yang,", affiliation: "PhD student at University of California, San Diego" }, 
  { name: "Qing Xiao,", affiliation: "PhD student at Carnegie Mellon University" },  
  { name: "Rosanna Bellini,", affiliation: "Assistant Professor at New York University" }, 
  { name: "Ruyuan Wan,", affiliation: "PhD student at Pennsylvania State University" },  
  { name: "Sabriya Maryam Alam,", affiliation: "PhD student at University of California, Berkeley" },  
  { name: "Srishti Palani,", affiliation: "Researcher at Salesforce" },  
  { name: "Sven Mayer,", affiliation: "Full Professor at Technische Universität Dortmund" },  
  { name: "Salvatore Andolina,", affiliation: "Associate Professor at Politecnico di Milano" },  
  { name: "Tariq Osman Andersen,", affiliation: "Associate Professor at Copenhagen University" },  
  { name: "Yaman Yu,", affiliation: "PhD student at University of Illinois at Urbana-Champaign" },  
  { name: "Zhiping Zhang,", affiliation: "PhD student at Northeastern University" },  
];




export const schedule: Schedule[] = [
  {
    start: "",
    end: "🚀 Session 1 (90min)",
    title: "",
  },
  {
    start: "",
    end: "15min",
    title: "Welcome & Opening Remarks",
  },
  {
    start: "",
    end: "20min",
    title: "Keynote Talk 1: Lama Ahmad (OpenAI)",
  },
  {
    start: "",
    end: "20min",
    title: "Lightning Talks by Authors",
  },
  {
    start: "",
    end: "35min",
    title: "Group Activity 1: Concept Mapping & Solution Ideation",
  },
  {
    start: "",
    end: " 🚀 Session 2 (90min)",
    title: "",
  },
  {
    start: "",
    end: "40min",
    title: "Group Activity 2: On-the-spot Paper Writing",
  },
  {
    start: "",
    end: "20min",
    title: "Insight Sharing",
  },
  {
    start: "",
    end: "30min (Open-door)",
    title: "Poster Session & Networking",
  },
];

const speakers: Speaker[] = [
  {
    name: "Lama Ahmad",
    affliation: "OpenAI / @_lamaahmad",
    webpage: "https://asiafoundation.org/people/lama-ahmad/",
    img: "lama.png",
    twitter: "https://x.com/_lamaahmad?lang=en",
    linkedin: "https://www.linkedin.com/in/lamaahmad",
    type: "Speaker",
    description:
      "Lama Ahmad, Ph.D. is a researcher and technology profes- sional currently leading partnerships and research on the risks and social impacts of AI at OpenAI’s Safety Systems team. She also serves as a Term Trustee for The Asia Foundation, guiding gover- nance and strategy. Previously, Lama worked on Facebook’s Open Research & Transparency team, focusing especially on democracy, elections, and the societal consequences of social media platforms. During her Luce Scholar year, she studied the ethics of data-driven technologies at the U.N. Global Pulse Lab in Jakarta, applying human-centered design across Southeast Asia. She is a passion- ate advocate for equity, inclusion, and interdisciplinary approaches in tech and policymaking."
  }
];

const orals: Oral[] = [
{ link: "/2026chi-pdfs/1.pdf",	title: "Human Agency, Causality, and the Human Computer Interface in High-Stakes Artificial Intelligence", authors: "Georges Hattab"},
{ link: "/2026chi-pdfs/2.pdf",	title: "Aligning AI with Developer Preferences: A Taxonomy of Desirable AI Agent Behavior", authors: "Tao Dong, Harini Sampath, Sherry Y. Shi, Andrew Macvean"},
{ link: "/2026chi-pdfs/3.pdf",	title: "Sustainable Intervention Points: A Framework for Designing High-Leverage Human Roles in AI Pipelines", authors: "Eduardo Baena, Gabriela Torres, Angélica Graciela Chíncaro Donayre"},
{ link: "/2026chi-pdfs/4.pdf",	title: "Negotiating Identity in the Age of Generative AI: A Five-Year Longitudinal Study of Chinese Digital Painters", authors: "Yibo Meng, Ruiqi Chen, ZhiMing Liu, Xin Chen, Jingjie Wang"},
{ link: "/2026chi-pdfs/5.pdf",	title: "The Invisible Architect: (Mis)Perceptions of Agency Around GenAI Use in Recruiting Workflows", authors: "Sajel Surati, Rosanna Bellini, Emily Black"},
{ link: "/2026chi-pdfs/6.pdf",	title: "Context-Dependent Alignment Failures in AI-Generated Religious Guidance", authors: "Sabriya Maryam Alam, Marwa Abdulhai, Tarek Naous, Niloufar Salehi"},
{ link: "/2026chi-pdfs/7.pdf",	title: "Building Intelligent User Interfaces for Human-AI Alignment", authors: "Danqing Shi"},
{ link: "/2026chi-pdfs/8.pdf",	title: "When Noticing Is Not a Command: Negotiated Agency in AI-Driven Assistive Household Cleaning Robots", authors: "Quoc-Toan Nguyen, Sven Mayer"},
{ link: "/2026chi-pdfs/9.pdf",	title: "Human-Centred Mechanism Design for Scalable Oversight", authors: "Eunice Jun, Konstantinos Voudouris"},
{ link: "/2026chi-pdfs/10.pdf",	title: "Bidirectional Alignment as Situated Repair: Linking Configuration and Runtime", authors: "M. Antonietta Grasso, Jisun Park, Jutta Willamowski"},
{ link: "/2026chi-pdfs/11.pdf",	title: "From Unilateral Behavioral Tuning to Human–AI Co-Configuration", authors: "Rong-Ching Chang, Hao-Chuan Wang"},
{ link: "/2026chi-pdfs/12.pdf",	title: "How Value Induction Reshapes LLM Behaviour", authors: "Arnav Arora, Natalie Schluter, Katherine Metcalf, Maartje Ter Hoeve"},
{ link: "/2026chi-pdfs/13.pdf",	title: "Aligning With the Dead: Posthumous Persistence as a Limit Case for Bidirectional Human-AI Alignment", authors: "Ruben Schlonsak, Denys J.C. Matthies"},
{ link: "/2026chi-pdfs/14.pdf",	title: "Who Is Imitating Whom? Reframing Bidirectional Alignment as Social Learning and Cultural Transmission", authors: "Sachit Mahajan"},
{ link: "/2026chi-pdfs/15.pdf",	title: "Supporting Reflection in LLM-based Exploratory Search", authors: "Salvatore Andolina"},
{ link: "/2026chi-pdfs/16.pdf",	title: "Beyond One-Way Influence: Bidirectional Opinion Dynamics in Multi-Turn Human-LLM Interactions", authors: "Yuyang Jiang, Longjie Guo, Yuchen Wu, Aylin Caliskan, Tanu Mitra, Hua Shen"},
{ link: "/2026chi-pdfs/17.pdf",	title: "Noise or Nuance? Viewing Annotator Disagreement as a Proxy for Subjectivity in Creative Domains", authors: "Christine Dierk, Jennifer Healey, Uttaran Bhattacharya, Somdeb Sarkhel"},
{ link: "/2026chi-pdfs/18.pdf",	title: "Relational Co-Adaptation in Emotionally Supportive AI: Tensions in Authentic Emotional Interaction", authors: "Mengqi Shi"},
{ link: "/2026chi-pdfs/19.pdf",	title: "Steering Vision Models towards Subjective Concepts with Language", authors: "Mihret Agegnehu Bekele, Dawit Getahun Mengistu, Kidus Paulos Gebretsadik, Natnael Abayneh Unasho, Amanuel Gizachew Abebe, Simret A Gebreegziabher"},
{ link: "/2026chi-pdfs/20.pdf",	title: "Trust Calibration as a Core Mechanism of Bidirectional Human-AI Alignment", authors: "Eryue Xu, Masooda Bashir"},
{ link: "/2026chi-pdfs/21.pdf",	title: "Multi-System Cognitive Steering for Generative Communication", authors: "Eric Lacosse, Pablo Tano, Daniel C McNamee"},
{ link: "/2026chi-pdfs/22.pdf",	title: "The Triadic Loop: A Framework for Negotiating Alignment in AI Co-hosted Livestreaming", authors: "Katherine Wang, Nadia Bianchi-Berthouze, Aneesha Singh"},
{ link: "/2026chi-pdfs/23.pdf",	title: "Bridging Human Interpretation and Machine Representation: A Landscape of Qualitative Data Analysis in the LLM Era", authors: "Xinyu Pi, Qisen Yang, Chuong Nguyen, Hua Shen"},
{ link: "/2026chi-pdfs/24.pdf",	title: "Design Generative AI for Practitioners: Exploring Interaction Approaches Aligned with Creative Practice", authors: "Xiaohan Peng, Wendy E. Mackay, Janin Koch"},
{ link: "/2026chi-pdfs/25.pdf",	title: "Revisiting Alignment for Human–AI Integration: A Proposal for Centered Evaluation", authors: "Giulia Frascaria"},
{ link: "/2026chi-pdfs/26.pdf",	title: "Align with Me, Not TO Me: Interactive Conceptual Alignment with LLM-Based Conversational Agents", authors: "Shengchen Zhang, Weiwei Guo"},
{ link: "/2026chi-pdfs/27.pdf",	title: "AI Phenomenology for Understanding Human-AI Experiences Across Eras", authors: "Bhada Yun, Evgenia Taranova, Dana Feng, Renn Su, April Wang"},
{ link: "/2026chi-pdfs/28.pdf",	title: "Multimodal Evaluation of Bidirectional Human–AI Alignment", authors: "Bhagyabati Moharana, Eoghan Hynes, Bryan Dunphy, Conor Keighrey, Niall Murray"},
{ link: "/2026chi-pdfs/29.pdf",	title: "More Than 1v1: Human–AI Alignment in Early Developmental Communities with Multimodal LLMs", authors: "Weiyan Shi, Kenny Tsu Wei Choo"},
{ link: "/2026chi-pdfs/30.pdf",	title: "HCI’s emerging roles in shaping alignment discretion", authors: "Dasha Simons"},
{ link: "/2026chi-pdfs/31.pdf",	title: "When Embodiment Backfires: The Impact of AI Chatbot Avatars on Human Perceived Empathy", authors: "Guanheng Cen, Xiang Dai, Xiaowen Zhu, João Sedoc"},
{ link: "/2026chi-pdfs/32.pdf",	title: "AI-Wrapped: Participatory, Privacy-Preserving Measurement of Longitudinal LLM Use In-the-Wild", authors: "Cathy Mengying Fang, Sheer Karny, Chayapatr Archiwaranguprok, Yasith Samaradivakara, Pat Pataranutaporn, Patricia Maes"},
{ link: "/2026chi-pdfs/33.pdf",	title: "Alignment Beyond Extraction: From Preference Optimization to Situated Value Elicitation", authors: "Sasha Mitts"},
{ link: "/2026chi-pdfs/34.pdf",	title: "A Perspective on Bidirectional Human-AI Alignment and Human Autonomy", authors: "Helena Anna Frijns, Dinara Talypova, Ambika Shahu, Philipp Wintersberger"},
{ link: "/2026chi-pdfs/35.pdf",	title: "Rationalize: Shared Semantic Reasoning for Human-AI Alignment", authors: "Aritra Dasgupta, Naga Datha Saikiran Battula, Avina Nakarmi, Sohom Sen, Subhodeep Ghosh, Xun Song"},
{ link: "/2026chi-pdfs/36.pdf",	title: "Generative Friction as an Alignment Mechanism in Human-AI Ideation", authors: "Ahmet Baki Kocaballi, Joseph Kizana, Simon Buckingham Shum"},
]

const poster: Poster[] = [
  { link: "https://openreview.net/attachment?id=PMUNiNCje7&name=pdf", title: "Envision Human-AI Perceptual Alignment from a Multimodal Interaction Perspective", authors: "Shu Zhong, Marianna Obrist" },
]

const tiny: Tiny[] = [
  { link: "https://openreview.net/attachment?id=8jb5Y5Esvs&name=pdf", title: "Rethinking AI cultural alignment", authors: "Michal Bravansky, Filip Trhlík, Fazl Barez"},
]

export const CHI2026: Metadata = {
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
