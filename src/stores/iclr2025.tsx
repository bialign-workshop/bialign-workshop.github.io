import { Alert } from "@material-ui/lab";
import { NavLink } from "react-router-dom";
import {
  CFP,
  Metadata,
  People,
  Overview,
  Schedule,
  Speaker,
} from "./Interfaces";
const format = "documentclass [manuscript, review, anonymous] {acmart}";
const overview: Overview = {
  contact: "bialign.workshop@gmail.com",
  acronym: "BiAlign",
  year: "2025",
  location: "Singapore",
  date: "April 27 or 28, 2025",
  fullName: "Workshop on Bidirectional Human-AI Alignment",
  description: (
    <>
    <p>
      This workshop focuses on <b className="text-framework">bidirectional</b> <b className="text-human">Human</b><b className="text-align">↔</b><b className="text-ai">AI</b> <b className="text-framework">alignment</b>, a paradigm shift in how we approach the challenge of human-AI alignment, which emphasizes the dynamic, complex, and evolving alignment process between humans and AI systems. 
      This is grounded on the <b className="text-highlight">"bidirectional human-AI alignment"</b> framework (see <a href="https://arxiv.org/pdf/2406.09264" target="_blank">Definition</a> and <a href="https://github.com/huashen218/bidirectional-alignment-reading-list/" target="_blank">ReadingList</a>) derived from a <a href="https://arxiv.org/abs/2406.09264" target="_blank">systematic survey</a> of over 400 interdisciplinary alignment papers in Machine Learning (ML), Human Computer Interaction (HCI), Natural Language Processing (NLP), more domains.
      Particularly, it involves two directions to  maximize its benefits for human society.
    </p>
    <ul>
        <li>
          <b className="text-framework">Aligning AI with Humans</b> (<b className="text-ai">AI</b>-centered perspective): focuses on integrating human specifications into training, steering, customizing, and monitoring AI systems;
        </li>
        <li>
        <b className="text-framework">Aligning Humans with AI</b> (<b className="text-human">Human</b>-centered perspective): aims to preserve human agency and empower humans to critically evaluate, explain, collaborate with AI systems.
        </li>
      </ul>
    </>
  ),
  challenge: (
    <>
    <p>
      The rapid advancements in general-purpose AI has precipitated the urgent need to align these systems with values, ethical principles, and goals of individuals and society at large.
      Traditionally, AI alignment has been viewed as a static, one-way process, with a primary focus on shaping AI systems to achieve desired outcomes and prevent negative side effect.
      However, as AI systems are taking on more complex decision-making roles,  this <b className="text-framework">unidirectional AI alignment is inadequate to capture the dynamic, complicated, and evolving interactions between humans and AI systems</b>.
    </p>
    <p>
      The core objectives of this workshop <b className="text-framework">are twofold</b>: 
      <b className="text-framework"> (1)</b> broadening the current understanding of AI alignment and inviting more researchers to collectively explore the bidirectional human-AI alignment studies; 
      <b className="text-framework"> (2)</b> fostering interdisciplinary collaboration between researchers in multi-disciplinary domains, such as AI, HCI, and social sciences, creating a platform for exchange and innovation. 
    </p>
    </>
    ),
  goal: (
    <>
    <p>This workshop aims to explore the design space from a comprehensive view of bidirectional human-AI alignment.</p>
    </>
  ),
  scope: (
    <>
      <p>This workshop aims to explore the design space of bidirectional human-AI alignment from a comprehensive view, calling for submissions (2-page, 4-page, or 9-page) from various disciplines and topics, including but not limited to (see all in <b className="text-highlight">Call For Papers</b>):</p>
      <ul>
        <li>
          <b className="text-framework">Scope:</b> Broadening the Definition of Current Alignment Research;
        </li>
        <li>
          <b className="text-framework">Opinions:</b> Position Papers and Roadmaps for Future Alignment Research;
        </li>
        <li>
          <b className="text-framework">Specification:</b> Representing Human Values, Behavior, Cognition, Societal Norms for AI Alignment;
        </li>
        <li>
          <b className="text-framework">Methods:</b> Reinforcement Learning with Human Feedback, Algorithms, Interaction Mechanisms, UX Design for Alignment; 
        </li>
        <li>
          <b className="text-framework">Evaluation:</b> Benchmarks, Metrics or Human Evaluation for Multi-objective AI Alignment;
        </li>
        <li>
          <b className="text-framework">Deployment:</b> Customizable Alignment, Steerability, Interpretability, and Scalable Oversight;
        </li>
        <li>
          <b className="text-framework">Societal Impact and Policy:</b> Fostering an Inclusive Human-AI Alignment Ecosystem.
        </li>
      </ul>
    </>
  ),
  backgroundImg: "background_grey.png",
  confLogoImg: "iclr_logo.png",
  logoImg: "logo.png",
  logoWithWord: "logo_word_long_shadow.png",
  confName: "ICLR",
};

const organizers: People[] = [
  {
    name: "Hua Shen",
    affliation: "University of Washington",
    webpage: "https://hua-shen.org/",
    img: "hua.png",
    twitter: "https://x.com/huashen218",
    description:
      "Hua Shen is a Postdoctoral Scholar at the University of Washington. " +
      "She is leading the bidirectional human-AI alignment projects and workshops with collaborators. " + 
      "Her research is rooted in HCI and intersects with various AI fields, such as NLP, Speech and Computer Vision. " + 
      "She empowers humans to interactively explain, evaluate, and collaborate with AI, and incorporates human feedback into improving AI. " +
      "She received multiple awards, including 2023 Rising Stars of Data Science,  2023 Google Research Science Conference Scholarships, AIED'24 Best Paper, CSCW'23 Best Demo, IUI'23 Best Paper Honorable Mention. She also served as Associate Chairs for CHI, CHI LBW, Program Committees for ACL, EMNLP, and more."
  },
  {
    name: "Ziqiao Ma",
    affliation: "University of Michigan",
    webpage: "https://mars-tin.github.io/",
    img: "martin.jpg",
    twitter: "https://x.com/ziqiao_ma",
    description:
      "Martin Ziqiao Ma is a Ph.D. candidate at the University of Michigan. His research stands on the intersection of language, interaction, and embodiment from a cognitive perspective, with the goal of grounding and aligning language agents to non-linguistic modalities and rich interactive contexts. He is a recipient of the Weinberg Cognitive Science Fellowship, an Outstanding Paper Award at ACL 2023, and the Amazon Alexa Prize Simbot Challenge Award. He co-organized the 4th SpLU-RoboNLP workshop at ACL 2024, served as the poster/demo chair for the 5th Michigan AI Symposium 2022, and as a regular program committee for various ML/NLP venues."
  },
  {
    name: "Reshmi Ghosh",
    affliation: "Microsoft",
    webpage: "https://reshmighosh.github.io/",
    img: "reshmi.png",
    twitter: "https://x.com/reshmigh",
    description:
      "Reshmi Ghosh is an Applied Scientist Lead for GenAI Safety in Microsoft's Responsible AI and Security team and has recently released novel methods for LLM Safety for 1P and 3P use. She was also the core architect in designing M365 CoPilots in 2023, and has previously worked on integrating machine learning features to Excel, Word, and PowerPoint. She graduated with a Ph.D. in data reconstruction using NLP methods for mitigating climate change, from Carnegie Mellon University in 2021, and is a research advisor for teams in MIT CSAIL, UMass Amherst, UCLA, and Oxford University. She has published in EMNLP, ICML, NeurIPS, ACL, ACM CIKM, KDD, etc. "
  },
  {
    name: "Tiffany Knearem",
    affliation: "Google",
    webpage: "https://tknearem.wixsite.com/tknearem",
    img: "tiffany.png",
    twitter: "https://x.com/tknearem",
    description:
      "Tiffany Knearem is a User Experience Researcher on the Material Design team at Google. Her research focus is on product designer-developer collaboration, creativity support tooling and opportunities for AI in the user interface (UI) design space. She holds a PhD in Information Sciences and Technologies with emphasis on Human-Computer Interaction from Pennsylvania State University, advised by Dr. John M. Carroll. She co-organized the CHI 2024 workshop on Computational UI."
  },
  {
    name: "Michael Xieyang Liu",
    affliation: "Google DeepMind",
    webpage: "https://lxieyang.github.io/",
    img: "michael.png",
    twitter: "https://x.com/lxieyang",
    description:
      "Michael Xieyang Liu is a research scientist at Google DeepMind. His research aims to improve human-AI interaction, with a particular focus on human interaction with multimodal large language models and controllable AI. Michael organized the Sensemaking workshop at CHI 2024. Michael previously earned his Ph.D. from the Human-Computer Interaction Institute at Carnegie Mellon University. There, he worked at the intersection of HCI, programming tools, sensemaking, intelligent user interfaces, and human-AI interaction, where he designed and built systems that accelerate online sensemaking for developers and facilitate human-AI interactions for end-users."
  },
  {
    name: "Sherry Tongshuang Wu",
    affliation: "Carnegie Mellon University",
    webpage: "https://www.cs.cmu.edu/~sherryw/",
    twitter: "https://x.com/tongshuangwu",
    img: "sherry.png",
    description:
      "Sherry Wu is an Assistant Professor at the Human-Computer Interaction Institute, Carnegie Mellon University. Her research lies at the intersection of Human-Computer Interaction and Natural Language Processing, aiming to design, evaluate, build, and interact with AI systems that are compatible with actual human goals. Sherry has organized three workshops at NLP and HCI conferences: Shared Stories and Lessons Learned workshop at EMNLP 2022 and Trust and Reliance in AI-Human Teams at CHI 2023-2024. She has also given two tutorials related to Human-AI Interaction at EMNLP 2023 and NAACL 2024. Before joining CMU, Sherry received her Ph.D. degree from the University of Washington.",
  },
  {
    name: "Andrés Monroy-Hernández",
    affliation: "Princeton University",
    webpage: "https://www.andresmh.com/",
    img: "andres.png",
    twitter: "https://x.com/andresmh",
    description: "Andrés Monroy-Hernández is an Assistant Professor co-leading the Princeton HCI Lab at Princeton University, where his research focuses on human-computer interaction and social computing. He is also an associated faculty at Princeton's Center for Information Technology and Policy, the Keller Center for Innovation, the DeCenter, the Program in Cognitive Science, and the Program in Latin American Studies. Before Princeton, he founded the HCI research team at Snap and led the FUSE Labs at MSR. He received his Ph.D. degree in Media Arts and Sciences from MIT, was named one of the 35 Innovators under 35 by the MIT Technology Review. He was the technical program co-chair, editor, and steering committee for ACM CSCW conferences."
  },
  {
    name: "Diyi Yang",
    affliation: "Stanford University",
    webpage: "https://cs.stanford.edu/~diyiy/",
    img: "Diyi_Yang.png",
    twitter: "https://x.com/Diyi_Yang",
    description:
    "Diyi Yang is an Assistant Professor in the Computer Science Department at Stanford University, affiliated with the Stanford NLP Group, Stanford HCI Group, Stanford AI Lab (SAIL), and Stanford Human-Centered Artificial Intelligence (HAI). Her research focuses on human-centered natural language processing and computational social science. Diyi has organized four workshops at NLP conferences: Widening NLP Workshops at NAACL 2018 and ACL 2019, Casual Inference workshop at EMNLP 2021, NLG Evaluation workshop at EMNLP 2021, and Shared Stories and Lessons Learned workshop at EMNLP 2022. She also gave a tutorial at ACL 2022 on Learning with Limited Data, and a tutorial at EACL 2023 on Summarizing Conversations at Scale. Diyi and Sherry have co-developed a new course on Human-Centered NLP that has been offered at both Stanford and CMU."  },
  {
    name: "Antoine Bosselut",
    affliation: "EPFL",
    webpage: "https://atcbosselut.github.io/",
    img: "antoine.png",
    twitter: "https://x.com/ABosselut",
    description:
      "Antoine Bosselut is an Assistant Professor in the School of Computer and Communication Sciences at EPFL, specializing in natural language processing (NLP) and machine learning. His research focuses on building knowledge-enhanced language models that can reason and make inferences about the world. Antoine’s work aims to bridge the gap between language models and human-like understanding, contributing significantly to areas such as commonsense reasoning and narrative understanding, with applications in improving the reasoning capabilities of AI systems. Previously, he was a postdoctoral researcher at Stanford University working with Jure Leskovec and Chris Manning. He completed a PhD at the University of Washington, working with Yejin Choi. He was named to the Forbes 30 under 30 list in Science \& Healthcare."  },
  {
    name: "Furong Huang",
    affliation: "University of Maryland",
    webpage: "https://furong-huang.com/",
    img: "furong.png",
    twitter: "https://x.com/furongh",
    description:
      "Furong Huang is an Associate Professor in the Department of Computer Science at the University of Maryland. Specializing in trustworthy machine learning, AI for sequential decision-making, and high-dimensional statistics, Dr. Huang focuses on applying theoretical principles to solve practical challenges in contemporary computing. Her research centers on creating reliable and interpretable machine learning models that operate effectively in real-world settings. She has also made significant strides in sequential decision-making, aiming to develop algorithms that optimize performance and adhere to ethical and safety standards. She organized the NeurIPS competition of ``A Stress-Test Challenge for Image Watermarks,'' chair and organizer of NSF-Amazon Fairness in AI Principle Investigator Meeting, Co-organizer of the NSF-IEEE workshop, and more."
  },
  {
    name: "Tanu Mitra",
    affliation: "University of Washington",
    webpage: "https://faculty.washington.edu/tmitra/",
    img: "tanu.png",
    twitter: "https://x.com/tanmit",
    description:
      "Tanu Mitra is an Associate Professor at the Information School at the University of Washington, and co-founded the Responsibility in AI Systems and Experiences (RAISE) Center. Her research blends human-centered data science and social science principles to develop new knowledge, methods, and systems to defend against the epistemic risks of online mis(dis)information, bias, hate and harms. Tanu’s work has been supported by grants from the NSF, NIH, DoD, Social Science One, and other Foundations. Her research has been recognized through multiple awards and honors, including an NSF-CRII, an early career ONR-YIP, Adamic-Glance Distinguished Young Researcher award and Virginia Tech College of Engineering Outstanding New Assistant Professor award, along with several best paper awards. Dr. Mitra currently serves on Spotify’s safety advisory board and has previously served on the advisory board of the Social Science Research Council’s Social Data Initiative. "
  },
  {
    name: "Joyce Chai",
    affliation: "University of Michigan",
    webpage: "https://web.eecs.umich.edu/~chaijy/",
    img: "chaijy.png",
    twitter: "https://x.com/sled_ai",
    description:
      "Joyce Chai is a Professor in the Department of Electrical Engineering and Computer Science at the University of Michigan. Her research interests span NLP and embodied AI to human-AI collaboration. Her current work explores the intersection between language, perception, and action to enable situated communication with embodied agents. She served on the executive board of NAACL and as Program Co-Chair for multiple conferences, most recently ACL 2020. She is a recipient of the NSF Career Award and multiple paper awards with her students (e.g., Best Long Paper Award at ACL 2010, Outstanding Paper Awards at EMNLP 2021 and ACL 2023). She is a Fellow of ACL." 
  },
  {
    name: "Marti A. Hearst",
    affliation: "University of California, Berkeley",
    webpage: "https://people.ischool.berkeley.edu/~hearst/",
    img: "marti_hearst.png",
    // twitter: "https://x.com/sled_ai",
    description:
      "Marti A. Hearst is a professor and previously the Interim Dean for the UC Berkeley School of Information. She is both an ACL Fellow and a SIGCHI Academy member, and former ACL President. Her research has long combined HCI and NLP; recent projects include adding interactivity to scholarly documents and creating interactive newspods. She recently gave invited keynote talks at the EACL NLP + HCI workshop, the KDD Workshop on Data Science with a Human in the Loop, and she advised the 2022 NAACL program chairs on the Human-Centered NLP special theme. She has taught courses in NLP, HCI, and information visualization for 25 years." 
  },
  {
    name: "Dawn Song",
    affliation: "University of California, Berkeley",
    webpage: "https://dawnsong.io/",
    img: "dawn.png",
    twitter: "https://x.com/dawnsongtweets",
    description:
      "Dawn Song is a Professor in the Department of Electrical Engineering and Computer Science at UC Berkeley. Her research interest lies in AI and deep learning, blockchain/web3, security and privacy. She is the recipient of various awards including the MacArthur Fellowship, the Guggenheim Fellowship, the NSF CAREER Award, the Alfred P. Sloan Research Fellowship, the MIT Technology Review TR-35 Award, and several Test-of-Time and Best Paper Awards from top conferences in Computer Security and Deep Learning. She is an ACM Fellow and an IEEE Fellow. She is ranked the most cited scholar in computer security (AMiner Award). She obtained her Ph.D. degree from UC Berkeley. Prior to joining UC Berkeley as a faculty, she was a faculty at Carnegie Mellon University from 2002 to 2007. She is also a serial entrepreneur and has been named on the Female Founder 100 List by Inc. and Wired25 List of Innovators."},
   {
    name: "Yang Li",
    affliation: "Google DeepMind",
    webpage: "https://yangli169.github.io/yangl.org/",
    img: "yang.png",
    twitter: "https://x.com/yangli169",
    description:
      "Yang Li is a Senior Staff Research Scientist at Google DeepMind, and an affiliate faculty member at University of Washington. His research lies at the intersection of HCI and AI, focusing on general deep learning research and models for solving human interactive intelligence problems and improving user experiences. He earned a Ph.D. degree in Computer Science from the Chinese Academy of Sciences, and conducted postdoctoral research at UC Berkeley EECS. Yang has extensively published in top venues across both the HCI and ML fields, including CHI, UIST, ICML, ACL, CVPR, NeurIPS, ICLR and KDD, and has constantly served as area chairs or senior area chairs across the HCI and ML fields, including ICLR 2025, NeurIPS 2024, ICML 2024, and more. Yang is an editor of the Springer book on AI for HCI: A Modern Approach, and an organizer of multiple workshops that bridges the HCI and AI/ML field, including the first AI\&HCI workshp at ICML." 
    },
];

const cfp: CFP = {
  description: "",
  invitation: "This workshop aims to explore the design space of bidirectional human-AI alignment from a comprehensive view, calling for submissions (2-page, 4-page, or 9-page) from various topics and disciplines (ML, NLP, HCI, Computer Vision, Speech, Social Science, and more), including but not limited to:",
  scope: (
    <>
      <ul>
        <li>
          <b className="text-framework">Scope: Broadening the Definition of Alignment.</b> This topic invites papers of thought-provoking arguments on how to redefine or expand the concept of alignment beyond current boundaries. For instance, how can we incorporate context-aware (situated) alignment or behavioral alignment for LLM agents? How can we better account for evolving human values over time? How to explore the mechanistic alignment of AI and human cognition?
            <div>
            <span className="text-keyword">- Key Phrases & Example Papers</span>: value/preference alignment, behavioral alignment, situated alignment, mechanistic alignment, dynamic and lifelong alignment, alignment with human-AI co-evolvement, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Opinions: Position Papers and Roadmaps for Future Alignment Research.</b> This topic invites position papers that explore bold, forward-thinking ideas, theoretical perspectives, or critiques that open new directions for research and practice in this field. These papers need not present finalized or empirically verified results but should stimulate discussion on how we can rethink and advance alignment between humans and AI systems.
            <div>
            <span className="text-keyword">- Keywords Examples</span>: design principles, roadmap, surveys, literature review, envisioning alignment, challenges and future directions, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Specification: Representing Human Values, Behavior, Cognition, Societal Norms for AI Alignment.</b> This topic invites exploratory frameworks or methodologies for formalizing abstract human values and societal and cultural norms into actionable specifications for AI systems, such as the challenges and opportunities in value specification, annotation practices on pluralistic values, especially under disagreements and with geographic diversity, or ways to bridge ethical risks and technical specifications.
            <div>
            <span className="text-keyword">- Keywords Examples</span>: specifying human objectives, reward hacking and modeling, annotation of human values, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Methods: Machine Learning for Aligning AI with Humans.</b> This topic invites papers to pre/post-train AI models that align with general, broadly shared human values as captured in large-scale datasets or interactive learning processes. We welcome theoretic and practical contributions from relevant machine learning areas like human-in-the-loop learning, multi-task learning, meta-learning, multi-objective reinforcement learning, etc.
            <div>
            <span className="text-keyword">- Keywords Examples</span>: alignment at scale, post-training, human-in-the-loop learning, multi-task learning, meta-learning, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Evaluation: Benchmarks and Metrics for Steerable and Multi-objective AI Alignment.</b> This topic centers on evaluating and assessing the alignment of AI systems with diverse human values/preferences or behaviors. We invite contributions on benchmarks, as well as innovative evaluation protocols and metrics that address multiple, sometimes conflicting objectives, and explore the steerability of pre-trained models.
            <div>
            <span className="text-keyword">- Keywords Examples</span>: human-in-the-loop evaluation, steerability, pluralistic value metrics, alignment evaluation framework and protocols etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Deployment: Customizable Alignment, Interpretability, and Scalable Oversight.</b> This topic addresses the need to tailor AI systems to specific cultural, societal, or individual values. Also, it explores how to interpret, oversee, and calibrate AI alignment at large-scale deployment. We welcome submissions from relevant areas like continual/life-long learning, interpreting alignment, inference time learning, AI customization, and more.
            <div>
            <span className="text-keyword">- Keywords Examples</span>: scalable oversight, customization/personalization, interpreting alignment, continual/life-long learning, inference time learning, online learning, situated interaction, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Societal Impact and Policy: Fostering An Inclusive Human-AI Alignment Ecosystem.</b> Human-AI alignment occurs within a broader ecosystem involving multiple stakeholders, including researchers, policymakers, developers, and end-users. This topic explores how to create a collaborative environment where all parties can help shape AI systems that adhere to ethical and technical standards, and the dynamic co-evolvement of AI and human society.
            <div>
            <span className="text-keyword">- Keywords Examples</span>: cognitive impacts and perspectives on alignment,  governance frameworks, feedback loops for continuous alignment, mechanisms for maintaining alignment as AI systems evolve, social impact and AI policy, dynamic impacts of co-evolving alignment, etc.
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
            February 2, 2025, 11:59 PM
          </span>
        </span>
      ),
      type: "Submission",
      description:
        "Submission will be reviewed by PC members, in a double-blind manner.",
    },
    {
      date: "March 3, 2025",
      type: "Notification",
    },
    {
      date: "April 11, 2025",
      type: "Camera ready",
      // description:
      //   "Accepted papers will be non-archival, and will be posted on this website & shared via social media.",
    },
    {
      date: "April 28, 2025 (Hybrid)",
      type: "Workshop",
      description:
        "At least one author must register and attend the hybrid workshop.",
    },
  ],
  submit: {
    platform: {
      name: "OpenReview Submission Portal",
      url: "https://openreview.net/group?id=ICLR.cc/2025/Workshop/Bi-Alig",
    },
    format: (
      <span>
        {" "}
        ICLR 2025 <a href="https://iclr.cc/Conferences/2025/CallForPapers">Style files and Templates</a>. 
        We call for <b>2-page</b>(tiny), <b>4-page</b> (short), and <b>9-page</b> (long) papers,  excluding references, fully
        anonymized. 
      </span>
    ),
    type: 'Position paper; Summarize existing research; Provide industry perspective; In-progress work; "encore" submissions of highly-relevant conference/journal papers.',
  },
  
};

const pcs = [
  { name: "Philippe Laban,", affiliation: "Microsoft Research"},
  { name: "Tuhin Chakrabarty,", affiliation: "Salesforce \& SUNY" },
  { name: "Xuandong Zhao,", affiliation: "UC Berkeley" },
  { name: "Jiayi Pan,", affiliation: "UC Berkeley" },
  { name: "Christina Qianou Ma,", affiliation: "CMU" },
  { name: "Yongyuan Liang,", affiliation: "UMD" },
  { name: "Ryan Liu,", affiliation: "Princeton" },
  { name: "Amna Liaqat,", affiliation: "Princeton" },
  { name: "Haoyi Qiu,", affiliation: "UCLA" },
  { name: "Ruoxi Ning,", affiliation: "UWaterloo" },
  { name: "Olivia Simin Fan,", affiliation: "EPFL" },
  { name: "Chen Zeming,", affiliation: "EPFL" },
  { name: "Gao Silin,", affiliation: "EPFL" },
  { name: "Badr Alkhamissy,", affiliation: "EPFL" },
  { name: "Beatriz Borges,", affiliation: "EPFL" },
  { name: "Chengyang Yang,", affiliation: "CMU" },
  { name: "Xinran Zhao,", affiliation: "CMU" },
  { name: "Vijay Viswanathan,", affiliation: "CMU" },
  { name: "Jessie Mindel,", affiliation: "CMU" },
  { name: "Yue Chris Fu,", affiliation: "UW" },
  { name: "Nitesh Goyal,", affiliation: "Google DeepMind" },
  { name: "Savvas Petridis,", affiliation: "Google DeepMind" },
  { name: "Akshat Gupta,", affiliation: "UC Berkeley" },
  { name: "Zeyu He,", affiliation: "Penn State" },
  { name: "Kundan Krishna,", affiliation: "Apple" },
  { name: "Yi-Hao Peng,", affiliation: "CMU" },
  { name: "Yutong Xie,", affiliation: "UMich" },
  { name: "Snehal Prabhudesa,", affiliation: "UMich" },
  { name: "Emily Yuwei Bao,", affiliation: "UMich" },
  { name: "Sumit Asthana,", affiliation: "UMich" },
  { name: "Tal August,", affiliation: "UIUC" },
  { name: "Sarah Sterman,", affiliation: "UIUC" },
  { name: "Shoubin Yu,", affiliation: "UNC" },
  { name: "Thai Le,", affiliation: "Indiana University" },
  { name: "Sean Xuefeng Du,", affiliation: "UW-Madison" },
];

export const schedule: Schedule[] = [
  {
    start: "08:50",
    end: "09:00 (15min)",
    title: "Welcome and Opening Remarks",
  },
  {
    start: "09:00",
    end: "09:30 (30min)",
    title: "Keynote 1: Been Kim, Google DeepMind",
  },
  {
    start: "09:30",
    end: "10:00 (30min)",
    title: "Keynote 2: Dan Bohus, Microsoft Research",
  },
  {
    start: "10:00",
    end: "10:30 (30min)",
    title: "Keynote 3: Frauke Kreuter, LMU Munich and UMD",
  },
  {
    start: "10:30",
    end: "11:30 (60min)",
    title: "Poster and Discussion Session (Concurrent Coffee break)",
  },
  {
    start: "11:30",
    end: "12:30 (60min)",
    title: "Spotlight Paper Sessions 1 (10min × 6 Papers)",
  },
  {
    start: "12:30",
    end: "13:30 (60min)",
    title: "Lunch break",
  },
  {
    start: "13:30",
    end: "14:00 (30min)",
    title: "Keynote 4: Brad Myers, Carnegie Mellon University",
  },
  {
    start: "14:00",
    end: "14:30 (30min)",
    title: "Keynote 5: Richard Ngo, OpenAI",
  },
  {
    start: "14:30",
    end: "15:00 (30min)",
    title: "Keynote 6: Hung-Yi Lee, National Taiwan University",
  },
  {
    start: "15:00",
    end: "15:30 (30min)",
    title: "Keynote 6: Pavel Izmailov, Anthropic/NYU",
  },
  {
    start: "15:30",
    end: "16:30 (60min)",
    title: "Poster and Discussion Session (Concurrent Coffee break)",
  },
  {
    start: "16:30",
    end: "17:10 (40min)",
    title: "Spotlight Paper Session 2 (10min × 4)",
  //   description:
  //     "The panel will broadly address questions of theory, practice, and challenges in designing for appropriate trust and reliance in human-ai teams. Questions may get at where you see the current state of research in human-ai trust and reliance (are we still exploring in attempts to build theory, or have we identified consistent effects?), how to bridge research on human-ai trust with current practice to help developers or end-users, evaluation challenges specific to this topic, difficulties people face with reasoning under uncertainty/assessing model calibration, other challenges that arise in this area of research, etc. ",
  // },
  },
  {
    start: "17:10",
    end: "17:50 (40min)",
    title: "Panel discussion with experts from diverse and well-balanced domains",
  },
  {
    start: "17:50",
    end: "18:10 (20min)",
    title: "Paper Award Announcement and Closing Remarks",
  },
];

const speakers: Speaker[] = [
  {
    name: "Been Kim",
    affliation: "Google DeepMind",
    webpage: "https://beenkim.github.io/",
    img: "been.png",
    type: "Interpretability and Alignment",
    description:
      "Been Kim is a renowned Senior Staff Research Scientist at Google DeepMind, specializing in interpretable machine learning and AI alignment. She pioneered the development of “concept-based” explanations like TCAV, enabling AI systems to provide human-understandable reasoning. Her research has significantly advanced the field of AI interpretability, aiming to bridge the gap between complex AI models and human understanding, making her an influential figure in the field of AI ethics and transparency. She serves on the ICLR board and leadership roles as General Chair, Senior Program Chair, and Workshop Chair at ICLR. Additionally, she has been a steering committee and area chair at FAccT. She gave the keynote at ICLR 2022, ECML 2020, and more.",
  },
  {
    name: "Brad Myers",
    type: "Interaction Techniques for Alignment",
    affliation: "Carnegie Mellon University",
    webpage: "https://www.danbohus.com/",
    img: "brad.png",
    description:
      "Brad A. Myers is the Charles M. Geschke Director of the Human-Computer Interaction Institute and Professor in the School of Computer Science at Carnegie Mellon University, with an affiliated faculty appointment in the Software and Societal Systems Department. He received the ACM SIGCHI Lifetime Achievement Award in Research, and was awarded the 2022 Alan J. Perlis Award for Imagination in Computer Science. He is an IEEE Life Fellow, ACM Fellow, member of the CHI Academy, and winner of 19 Best Paper type awards and 6 Most Influential Paper Awards. He is the author or editor of over 550 publications, and he has been on the editorial board of 8 journals. ",
  },
  {
    name: "Dan Bohus",
    type: "Multimodal Situated Interaction",
    affliation: "Microsoft Research",
    webpage: "https://www.danbohus.com/",
    img: "Dan_Bohus_square.png",
    description:
      "Dan Bohus is a Senior Principal Researcher at Microsoft Research, specializing in computational models for multimodal, physically situated interaction. His work focuses on creating systems that reason about their surroundings and seamlessly participate in interactions and collaborations with people in the physical world. He has led groundbreaking research on developing interactive systems that support collaboration and communication between humans and AI, with applications in areas like human-robot interactive systems, embodied conversational agents, intelligent spaces, AR/VR, etc. He gave the keynote at SIGDial, and invited talks at MSR Cambridge AI school, ASRU, and more.",
  },
  {
    name: "Frauke Kreuter",
    affliation: "LMU Munich and University of Maryland",
    webpage: "https://jpsm.umd.edu/facultyprofile/kreuter/frauke",
    img: "frauke_1_1_format_s.png",
    type: "Dynamic Human Values, Preferences, and Social Norms",
    description:
      "Frauke Kreuter is Co-Director of the Social Data Science Center and Professor in the Joint Program in Survey Methodology at the University of Maryland, USA; and Chair of Statistics and Data Science at the Ludwig-Maximilians-University of Munich. She is an elected fellow of the American Statistical Association and the 2020 recipient of the Warren Mitofsky Innovators Award of the American Association for Public Opinion Research. She is the Founder of the International Program for Survey and Data Science; Co-founder of the Coleridge Initiative, whose goal is to accelerate data-driven research and policy around human beings and their interactions for program management, policy development, and scholarly purposes.",
  },
  {
    name: "Hung-yi Lee",
    type: "Alignment in Spoken Language Models",
    affliation: "National Taiwan University",
    webpage: "https://speech.ee.ntu.edu.tw/~hylee/index.php",
    img: "hung-yi.png",
    description:
      "Hung-yi Lee is an Associate Professor in the Department of Electrical Engineering at National Taiwan University (NTU), specializing in speech and language processing. His research focuses on deep learning, machine learning, and their applications in speech recognition, natural language processing, and AI education. He has been an influential educator and researcher for his engaging online AI courses, contributing to both the academic community and AI education globally. He gave extensive tutorials, open courses, and invited talks at various conferences and institutes, such as ICASSP, MSR, Google, MIT CSAIL, and more. ",
  },
  {
    name: "Pavel Izmailov",
    type: "LLM Reasoning for Alignment and AI for Science",
    affliation: "Anthropic / New York University",
    webpage: "https://izmailovpavel.github.io/",
    img: "pavel.png",
    description:
      "Pavel Izmailov is a researcher at Anthropic and an upcoming Assistant Professor at New York University. His research focuses on LLM reasoning, AI for science, and AI alignment. Previously, he worked on reasoning and problem-solving in language models at OpenAI. He contributed to the recent OpenAI o1 models, a new state-of-the-art in LLM reasoning. He have also worked on weak-to-strong-generalization on the superalignment team under Jeff Wu, Jan Leike and Ilya Sutskever. He also had a short stint at xAI reporting to Elon Musk.",
  },
  {
    name: "Richard Ngo",
    type: "AI Safety \& Specification",
    affliation: "OpenAI",
    webpage: "https://www.richardcngo.com/",
    img: "richard.png",
    description:
      "Richard Ngo is a Research Scientist working on the Governance team at OpenAI, focusing on long-term AI safety and alignment. He was previously a research engineer on the AGI safety team at DeepMind. His work explores the development of general intelligence and the challenges of ensuring that advanced AI systems act in ways aligned with human values. He has written extensively on topics such as AI governance, ethics, and the societal impacts of AI. Richard is a prominent voice in the field, regularly contributing to discussions on AI policy and safety, and has a background in philosophy and computer science. He created the My Alignment Fundamentals Curriculum.",
  },
];

export const Iclr2025: Metadata = {
  overview,
  organizers,
  cfp,
  pcs,
  schedule,
  speakers,
};
