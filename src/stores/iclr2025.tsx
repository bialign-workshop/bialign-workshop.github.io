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
} from "./Interfaces";
const format = "documentclass [manuscript, review, anonymous] {acmart}";
const overview: Overview = {
  contact: "bidirectional-human-ai-alignment@googlegroups.com",
  slack: "https://join.slack.com/t/bi-alignworkshops/shared_invite/zt-2vpuf45n7-zP8DcmoRwjqfCxVQ4f5_Kw",
  acronym: "BiAlign",
  year: "2025",
  location: "Singapore",
  date: "April 28, 2025",
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
        <b className="text-framework">Aligning Humans with AI</b> (<b className="text-human">Human</b>-centered perspective): aims to preserve human agency and empower humans to critically evaluate, explain, and collaborate with AI systems.
        </li>
      </ul>
    </>
  ),
  challenge: (
    <>
    <p>
      The rapid advancements in general-purpose AI has precipitated the urgent need to align these systems with values, ethical principles, and goals that match the context of use, i.e., for individuals using an AI system, and for the holistic society at large.
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
          <b className="text-framework">Scope:</b> Broader Definitions and clarifications of Current Alignment Research;
        </li>
        <li>
          <b className="text-framework">Opinions:</b> Position Papers and Roadmaps for Future Alignment Research;
        </li>
        <li>
          <b className="text-framework">Specification:</b> Representation approaches of Human Values, Behavior, Cognition, Societal Norms for AI Alignment;
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
  logoWithWord: "logo_word_long_chi.png",
  confName: "ICLR",
};

const organizers: People[] = [
  {
    name: "Hua Shen",
    affliation: "University of Washington / @huashen218 ",
    label: "(Lead Chair)",
    webpage: "https://hua-shen.org/",
    img: "hua.png",
    twitter: "https://x.com/huashen218",
    bluesky: "https://bsky.app/profile/huashen.bsky.social",
    description:
      "Hua Shen is a Postdoctoral Scholar at the University of Washington. " +
      "She is leading the bidirectional human-AI alignment projects and workshops with collaborators. " + 
      "Her research is rooted in HCI and intersects with various AI fields, such as NLP, Speech and Computer Vision. " + 
      "She empowers humans to interactively explain, evaluate, and collaborate with AI, and incorporates human feedback into improving AI. " +
      "She received multiple awards, including 2023 Rising Stars of Data Science,  2023 Google Research Science Conference Scholarships, AIED'24 Best Paper, CSCW'23 Best Demo, IUI'23 Best Paper Honorable Mention. She also served as Associate Chairs for CHI, CHI LBW, Program Committees for ACL, EMNLP, and more."
  },
  {
    name: "Ziqiao (Martin) Ma",
    affliation: "University of Michigan / @ziqiao_ma",
    label: "(Workflow Chair)",
    webpage: "https://mars-tin.github.io/",
    img: "martin.png",
    twitter: "https://x.com/ziqiao_ma",
    bluesky: "https://bsky.app/profile/marstin.bsky.social",
    description:
      "Martin Ziqiao Ma is a Ph.D. candidate at the University of Michigan. His research stands on the intersection of language, interaction, and embodiment from a cognitive perspective, with the goal of grounding and aligning language agents to non-linguistic modalities and rich interactive contexts. He is a recipient of the Weinberg Cognitive Science Fellowship, an Outstanding Paper Award at ACL 2023, and the Amazon Alexa Prize Simbot Challenge Award. He co-organized the 4th SpLU-RoboNLP workshop at ACL 2024, served as the poster/demo chair for the 5th Michigan AI Symposium 2022, and as a regular program committee for various ML/NLP venues."
  },
  {
    name: "Reshmi Ghosh",
    affliation: "Microsoft / @reshmigh",
    webpage: "https://reshmighosh.github.io/",
    img: "reshmi.png",
    twitter: "https://x.com/reshmigh",
    bluesky: "https://bsky.app/profile/reshmighosh.bsky.social",
    description:
      "Reshmi Ghosh is an Applied Scientist Lead for GenAI Safety in Microsoft's Responsible AI and Security team and has recently released novel methods for LLM Safety for 1P and 3P use. She was also the core architect in designing M365 CoPilots in 2023, and has previously worked on integrating machine learning features to Excel, Word, and PowerPoint. She graduated with a Ph.D. in data reconstruction using NLP methods for mitigating climate change, from Carnegie Mellon University in 2021, and is a research advisor for teams in MIT CSAIL, UMass Amherst, UCLA, and Oxford University. She has published in EMNLP, ICML, NeurIPS, ACL, ACM CIKM, KDD, etc. "
  },
  {
    name: "Antoine Bosselut",
    affliation: "EPFL / @ABosselut",
    label: "(Onsite Chair)",
    webpage: "https://atcbosselut.github.io/",
    img: "antoine.png",
    twitter: "https://x.com/ABosselut",
    bluesky: "abosselut.bsky.social",
    description:
      "Antoine Bosselut is an Assistant Professor in the School of Computer and Communication Sciences at EPFL, specializing in natural language processing (NLP) and machine learning. His research focuses on building knowledge-enhanced language models that can reason and make inferences about the world. Antoine’s work aims to bridge the gap between language models and human-like understanding, contributing significantly to areas such as commonsense reasoning and narrative understanding, with applications in improving the reasoning capabilities of AI systems. Previously, he was a postdoctoral researcher at Stanford University working with Jure Leskovec and Chris Manning. He completed a PhD at the University of Washington, working with Yejin Choi. He was named to the Forbes 30 under 30 list in Science \& Healthcare."  
  },
  {
    name: "Diyi Yang",
    affliation: "Stanford University / @Diyi_Yang",
    webpage: "https://cs.stanford.edu/~diyiy/",
    img: "Diyi_Yang.png",
    twitter: "https://x.com/Diyi_Yang",
    bluesky: "@diyiyang.bsky.social",
    description:
    "Diyi Yang is an Assistant Professor in the Computer Science Department at Stanford University, affiliated with the Stanford NLP Group, Stanford HCI Group, Stanford AI Lab (SAIL), and Stanford Human-Centered Artificial Intelligence (HAI). Her research focuses on human-centered natural language processing and computational social science. Diyi has organized four workshops at NLP conferences: Widening NLP Workshops at NAACL 2018 and ACL 2019, Casual Inference workshop at EMNLP 2021, NLG Evaluation workshop at EMNLP 2021, and Shared Stories and Lessons Learned workshop at EMNLP 2022. She also gave a tutorial at ACL 2022 on Learning with Limited Data, and a tutorial at EACL 2023 on Summarizing Conversations at Scale. Diyi and Sherry have co-developed a new course on Human-Centered NLP that has been offered at both Stanford and CMU."  
  },
  {
    name: "Furong Huang",
    affliation: "University of Maryland / @furongh",
    webpage: "https://furong-huang.com/",
    img: "furong.png",
    twitter: "https://x.com/furongh",
    bluesky: "furongh.bsky.social",
    description:
      "Furong Huang is an Associate Professor in the Department of Computer Science at the University of Maryland. Specializing in trustworthy machine learning, AI for sequential decision-making, and high-dimensional statistics, Dr. Huang focuses on applying theoretical principles to solve practical challenges in contemporary computing. Her research centers on creating reliable and interpretable machine learning models that operate effectively in real-world settings. She has also made significant strides in sequential decision-making, aiming to develop algorithms that optimize performance and adhere to ethical and safety standards. She organized the NeurIPS competition of ``A Stress-Test Challenge for Image Watermarks,'' chair and organizer of NSF-Amazon Fairness in AI Principle Investigator Meeting, Co-organizer of the NSF-IEEE workshop, and more."
  },

  {
    name: "Tanu Mitra",
    affliation: "University of Washington / @tanmit",
    label: "(Virtual Chair)",
    webpage: "https://faculty.washington.edu/tmitra/",
    img: "tanu.png",
    twitter: "https://x.com/tanmit",
    bluesky: "https://bsky.app/profile/tanumitra.bsky.social",
    description:
      "Tanu Mitra is an Associate Professor at the Information School at the University of Washington, and co-founded the Responsibility in AI Systems and Experiences (RAISE) Center. Her research blends human-centered data science and social science principles to develop new knowledge, methods, and systems to defend against the epistemic risks of online mis(dis)information, bias, hate and harms. Tanu’s work has been supported by grants from the NSF, NIH, DoD, Social Science One, and other Foundations. Her research has been recognized through multiple awards and honors, including an NSF-CRII, an early career ONR-YIP, Adamic-Glance Distinguished Young Researcher award and Virginia Tech College of Engineering Outstanding New Assistant Professor award, along with several best paper awards. Dr. Mitra currently serves on Spotify’s safety advisory board and has previously served on the advisory board of the Social Science Research Council’s Social Data Initiative. "
  },
  {
    name: "Joyce Chai",
    affliation: "University of Michigan / @sled_ai",
    label: "(Onsite Chair)",
    webpage: "https://web.eecs.umich.edu/~chaijy/",
    img: "chaijy.png",
    twitter: "https://x.com/sled_ai",
    // bluesky: "",
    description:
      "Joyce Chai is a Professor in the Department of Electrical Engineering and Computer Science at the University of Michigan. Her research interests span NLP and embodied AI to human-AI collaboration. Her current work explores the intersection between language, perception, and action to enable situated communication with embodied agents. She served on the executive board of NAACL and as Program Co-Chair for multiple conferences, most recently ACL 2020. She is a recipient of the NSF Career Award and multiple paper awards with her students (e.g., Best Long Paper Award at ACL 2010, Outstanding Paper Awards at EMNLP 2021 and ACL 2023). She is a Fellow of ACL." 
  },
  {
    name: "Marti A. Hearst",
    affliation: "UC Berkeley",
    label: "(Virtual Chair)",
    webpage: "https://people.ischool.berkeley.edu/~hearst/",
    img: "marti_hearst.png",
    // twitter: "https://x.com/sled_ai",
    // bluesky: "",
    description:
      "Marti A. Hearst is a professor and previously the Interim Dean for the UC Berkeley School of Information. She is both an ACL Fellow and a SIGCHI Academy member, and former ACL President. Her research has long combined HCI and NLP; recent projects include adding interactivity to scholarly documents and creating interactive newspods. She recently gave invited keynote talks at the EACL NLP + HCI workshop, the KDD Workshop on Data Science with a Human in the Loop, and she advised the 2022 NAACL program chairs on the Human-Centered NLP special theme. She has taught courses in NLP, HCI, and information visualization for 25 years." 
  },
    {
      name: "Dawn Song",
      affliation: "UC Berkeley / @dawnsongtweets",
      webpage: "https://dawnsong.io/",
      img: "dawn.png",
      twitter: "https://x.com/dawnsongtweets",
      // bluesky: "",
      description:
        "Dawn Song is a Professor in the Department of Electrical Engineering and Computer Science at UC Berkeley. Her research interest lies in AI and deep learning, blockchain/web3, security and privacy. She is the recipient of various awards including the MacArthur Fellowship, the Guggenheim Fellowship, the NSF CAREER Award, the Alfred P. Sloan Research Fellowship, the MIT Technology Review TR-35 Award, and several Test-of-Time and Best Paper Awards from top conferences in Computer Security and Deep Learning. She is an ACM Fellow and an IEEE Fellow. She is ranked the most cited scholar in computer security (AMiner Award). She obtained her Ph.D. degree from UC Berkeley. Prior to joining UC Berkeley as a faculty, she was a faculty at Carnegie Mellon University from 2002 to 2007. She is also a serial entrepreneur and has been named on the Female Founder 100 List by Inc. and Wired25 List of Innovators."
    },
    {
      name: "Yang Li",
      affliation: "Google DeepMind / @yangli169",
      label: "(Onsite Chair)",
      webpage: "https://yangli169.github.io/yangl.org/",
      img: "yang.png",
      twitter: "https://x.com/yangli169",
      // bluesky: "",
      description:
        "Yang Li is a Senior Staff Research Scientist at Google DeepMind, and an affiliate faculty member at University of Washington. His research lies at the intersection of HCI and AI, focusing on general deep learning research and models for solving human interactive intelligence problems and improving user experiences. He earned a Ph.D. degree in Computer Science from the Chinese Academy of Sciences, and conducted postdoctoral research at UC Berkeley EECS. Yang has extensively published in top venues across both the HCI and ML fields, including CHI, UIST, ICML, ACL, CVPR, NeurIPS, ICLR and KDD, and has constantly served as area chairs or senior area chairs across the HCI and ML fields, including ICLR 2025, NeurIPS 2024, ICML 2024, and more. Yang is an editor of the Springer book on AI for HCI: A Modern Approach, and an organizer of multiple workshops that bridges the HCI and AI/ML field, including the first AI\&HCI workshp at ICML." 
      }
];



const chiorganizers: CHIPeople[] = [
  {
    name: "Hua Shen",
    affliation: "University of Washington / @huashen218",
    label: "(Virtual Chair)",
    webpage: "https://hua-shen.org/",
    img: "hua.png",
    twitter: "https://x.com/huashen218",
    bluesky: "https://bsky.app/profile/huashen.bsky.social",
    description:
      "Hua Shen is a Postdoctoral Scholar at the University of Washington. " +
      "She is leading the bidirectional human-AI alignment projects and workshops with collaborators. " + 
      "Her research is rooted in HCI and intersects with various AI fields, such as NLP, Speech and Computer Vision. " + 
      "She empowers humans to interactively explain, evaluate, and collaborate with AI, and incorporates human feedback into improving AI. " +
      "She received multiple awards, including 2023 Rising Stars of Data Science,  2023 Google Research Science Conference Scholarships, AIED'24 Best Paper, CSCW'23 Best Demo, IUI'23 Best Paper Honorable Mention. She also served as Associate Chairs for CHI, CHI LBW, Program Committees for ACL, EMNLP, and more."
  },
  {
    name: "Tiffany Knearem ",
    affliation: "Google / @tknearem",
    label: "(Onsite Chair)",
    webpage: "https://tknearem.wixsite.com/tknearem",
    img: "tiffany.png",
    twitter: "https://x.com/tknearem",
    bluesky: "https://bsky.app/profile/tknearem.bsky.social",
    description:
      "Tiffany Knearem is a User Experience Researcher on the Material Design team at Google. Her research focus is on product designer-developer collaboration, creativity support tooling and opportunities for AI in the user interface (UI) design space. She holds a PhD in Information Sciences and Technologies with emphasis on Human-Computer Interaction from Pennsylvania State University, advised by Dr. John M. Carroll. She co-organized the CHI 2024 workshop on Computational UI."
  },
  {
    name: "Michael Xieyang Liu",
    affliation: "Google DeepMind / @lxieyang",
    label: "(Onsite Chair)",
    webpage: "https://lxieyang.github.io/",
    img: "michael.png",
    twitter: "https://x.com/lxieyang",
    // bluesky: "",
    description:
      "Michael Xieyang Liu is a research scientist at Google DeepMind. His research aims to improve human-AI interaction, with a particular focus on human interaction with multimodal large language models and controllable AI. Michael organized the Sensemaking workshop at CHI 2024. Michael previously earned his Ph.D. from the Human-Computer Interaction Institute at Carnegie Mellon University. There, he worked at the intersection of HCI, programming tools, sensemaking, intelligent user interfaces, and human-AI interaction, where he designed and built systems that accelerate online sensemaking for developers and facilitate human-AI interactions for end-users."
  },
  {
    name: "Sherry Tongshuang Wu",
    affliation: "Carnegie Mellon University / @tongshuangwu",
    label: "(Onsite Chair)",
    webpage: "https://www.cs.cmu.edu/~sherryw/",
    twitter: "https://x.com/tongshuangwu",
    bluesky: "https://bsky.app/profile/sherrytswu.bsky.social",
    img: "sherry.png",
    description:
      "Sherry Wu is an Assistant Professor at the Human-Computer Interaction Institute, Carnegie Mellon University. Her research lies at the intersection of Human-Computer Interaction and Natural Language Processing, aiming to design, evaluate, build, and interact with AI systems that are compatible with actual human goals. Sherry has organized three workshops at NLP and HCI conferences: Shared Stories and Lessons Learned workshop at EMNLP 2022 and Trust and Reliance in AI-Human Teams at CHI 2023-2024. She has also given two tutorials related to Human-AI Interaction at EMNLP 2023 and NAACL 2024. Before joining CMU, Sherry received her Ph.D. degree from the University of Washington.",
  },
  {
    name: "Yun Huang",
    affliation: "University of Illinois Urbana-Champaign / @YunHuang_HCI",
    label: "(Onsite Chair)",
    webpage: "https://ischool.illinois.edu/people/yun-huang",
    img: "yun.png",
    twitter: "https://x.com/YunHuang_HCI",
    // bluesky: "",
    description:
      "Yun Huang is an Associate Professor at the School of Information Sciences at the University of Illinois at Urbana-Champaign. She co-directs the SALT lab, focusing on social computing systems research. She is dedicated to innovating AI-based solutions that foster a synergistic relationship between humans and machines, enhancing educational opportunities to all and expanding access to community services. She received her Ph.D. in information and computer science from the University of California, Irvine."
  },
  {
    name: "Andrés Monroy-Hernández",
    affliation: "Princeton University / @andresmh",
    webpage: "https://www.andresmh.com/",
    img: "andres.png",
    twitter: "https://x.com/andresmh",
    bluesky: "andresmh.com",
    description: "Andrés Monroy-Hernández is an Assistant Professor co-leading the Princeton HCI Lab at Princeton University, where his research focuses on human-computer interaction and social computing. He is also an associated faculty at Princeton's Center for Information Technology and Policy, the Keller Center for Innovation, the DeCenter, the Program in Cognitive Science, and the Program in Latin American Studies. Before Princeton, he founded the HCI research team at Snap and led the FUSE Labs at MSR. He received his Ph.D. degree in Media Arts and Sciences from MIT, was named one of the 35 Innovators under 35 by the MIT Technology Review. He was the technical program co-chair, editor, and steering committee for ACM CSCW conferences."
  },
  {
    name: "Tanu Mitra",
    affliation: "University of Washington / @tanmit",
    label: "(Virtual Chair)",
    webpage: "https://faculty.washington.edu/tmitra/",
    img: "tanu.png",
    twitter: "https://x.com/tanmit",
    bluesky: "https://bsky.app/profile/tanumitra.bsky.social",
    description:
      "Tanu Mitra is an Associate Professor at the Information School at the University of Washington, and co-founded the Responsibility in AI Systems and Experiences (RAISE) Center. Her research blends human-centered data science and social science principles to develop new knowledge, methods, and systems to defend against the epistemic risks of online mis(dis)information, bias, hate and harms. Tanu’s work has been supported by grants from the NSF, NIH, DoD, Social Science One, and other Foundations. Her research has been recognized through multiple awards and honors, including an NSF-CRII, an early career ONR-YIP, Adamic-Glance Distinguished Young Researcher award and Virginia Tech College of Engineering Outstanding New Assistant Professor award, along with several best paper awards. Dr. Mitra currently serves on Spotify’s safety advisory board and has previously served on the advisory board of the Social Science Research Council’s Social Data Initiative. "
  },
   {
    name: "Yang Li",
    affliation: "Google DeepMind / @yangli169",
    webpage: "https://yangli169.github.io/yangl.org/",
    img: "yang.png",
    twitter: "https://x.com/yangli169",
    // bluesky: "",
    description:
      "Yang Li is a Senior Staff Research Scientist at Google DeepMind, and an affiliate faculty member at University of Washington. His research lies at the intersection of HCI and AI, focusing on general deep learning research and models for solving human interactive intelligence problems and improving user experiences. He earned a Ph.D. degree in Computer Science from the Chinese Academy of Sciences, and conducted postdoctoral research at UC Berkeley EECS. Yang has extensively published in top venues across both the HCI and ML fields, including CHI, UIST, ICML, ACL, CVPR, NeurIPS, ICLR and KDD, and has constantly served as area chairs or senior area chairs across the HCI and ML fields, including ICLR 2025, NeurIPS 2024, ICML 2024, and more. Yang is an editor of the Springer book on AI for HCI: A Modern Approach, and an organizer of multiple workshops that bridges the HCI and AI/ML field, including the first AI\&HCI workshp at ICML." 
    },
    {
      name: "Marti A. Hearst",
      affliation: "UC Berkeley",
      label: "(Virtual Chair)",
      webpage: "https://people.ischool.berkeley.edu/~hearst/",
      img: "marti_hearst.png",
      description:
        "Marti A. Hearst is a professor and previously the Interim Dean for the UC Berkeley School of Information. She is both an ACL Fellow and a SIGCHI Academy member, and former ACL President. Her research has long combined HCI and NLP; recent projects include adding interactivity to scholarly documents and creating interactive newspods. She recently gave invited keynote talks at the EACL NLP + HCI workshop, the KDD Workshop on Data Science with a Human in the Loop, and she advised the 2022 NAACL program chairs on the Human-Centered NLP special theme. She has taught courses in NLP, HCI, and information visualization for 25 years." 
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
            <span className="text-keyword">- keyword examples</span>: value/preference alignment, behavioral alignment, situated alignment, mechanistic alignment, dynamic and lifelong alignment, alignment with human-AI co-evolvement, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Opinions: Position Papers and Roadmaps for Future Alignment Research.</b> This topic invites position papers that explore bold, forward-thinking ideas, theoretical perspectives, or critiques that open new directions for research and practice in this field. These papers need not present finalized or empirically verified results but should stimulate discussion on how we can rethink and advance alignment between humans and AI systems.
            <div>
            <span className="text-keyword">- keyword examples</span>: design principles, roadmap, surveys, literature review, envisioning alignment, challenges and future directions, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Specification: Representing Human Values, Behavior, Cognition, Societal Norms for AI Alignment.</b> This topic invites exploratory frameworks or methodologies for formalizing abstract human values and societal and cultural norms into actionable specifications for AI systems, such as the challenges and opportunities in value specification, annotation practices on pluralistic values, especially under disagreements and with geographic diversity, or ways to bridge ethical risks and technical specifications.
            <div>
            <span className="text-keyword">- keyword examples</span>: specifying human objectives, reward hacking and modeling, annotation of human values, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Methods: Machine Learning for Aligning AI with Humans.</b> This topic invites papers to pre/post-train AI models that align with general, broadly shared human values as captured in large-scale datasets or interactive learning processes. We welcome theoretic and practical contributions from relevant machine learning areas like human-in-the-loop learning, multi-task learning, meta-learning, multi-objective reinforcement learning, etc.
            <div>
            <span className="text-keyword">- keyword examples</span>: alignment at scale, post-training, human-in-the-loop learning, multi-task learning, meta-learning, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Evaluation: Benchmarks and Metrics for Steerable and Multi-objective AI Alignment.</b> This topic centers on evaluating and assessing the alignment of AI systems with diverse human values/preferences or behaviors. We invite contributions on benchmarks, as well as innovative evaluation protocols and metrics that address multiple, sometimes conflicting objectives, and explore the steerability of pre-trained models.
            <div>
            <span className="text-keyword">- keyword examples</span>: human-in-the-loop evaluation, steerability, pluralistic value metrics, alignment evaluation framework and protocols etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Deployment: Customizable Alignment, Interpretability, and Scalable Oversight.</b> This topic addresses the need to tailor AI systems to specific cultural, societal, or individual values. Also, it explores how to interpret, oversee, and calibrate AI alignment at large-scale deployment. We welcome submissions from relevant areas like continual/life-long learning, interpreting alignment, inference time learning, AI customization, and more.
            <div>
            <span className="text-keyword">- keyword examples</span>: scalable oversight, customization/personalization, interpreting alignment, continual/life-long learning, inference time learning, online learning, situated interaction, etc.
            </div>
        </li>
        <li>
          <b className="text-framework">Societal Impact and Policy: Fostering An Inclusive Human-AI Alignment Ecosystem.</b> Human-AI alignment occurs within a broader ecosystem involving multiple stakeholders, including researchers, policymakers, developers, and end-users. This topic explores how to create a collaborative environment where all parties can help shape AI systems that adhere to ethical and technical standards, and the dynamic co-evolvement of AI and human society.
            <div>
            <span className="text-keyword">- keyword examples</span>: cognitive impacts and perspectives on alignment,  governance frameworks, feedback loops for continuous alignment, mechanisms for maintaining alignment as AI systems evolve, social impact and AI policy, dynamic impacts of co-evolving alignment, etc.
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
            style={{
              color: "#5f6368",
              textDecoration: "line-through",
              marginRight: "5px",
            }}
          >
            February 15, 2025
          </span>
        </span>
      ),
      type: "Submission",
      description:
        "Submission will be reviewed by PC members, in a double-blind manner.",
    },
    {
      date: 
      (
        <span>
          <span
            style={{
              color: "#5f6368",
              textDecoration: "line-through",
              marginRight: "5px",
            }}
          >
            March 5, 2025
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
            style={{
              color: "#5f6368",
              textDecoration: "line-through",
              marginRight: "5px",
            }}
          >
            April 14, 2025
          </span>
        </span>
      ),
      type: "Camera ready",
      // description:
      //   "Accepted papers will be non-archival, and will be posted on this website & shared via social media.",
    },
    {
      date: "April 28 (All Day), 2025",
      type: "ICLR Workshop",
      // description:
      //   "At least one author must register and attend the hybrid workshop.",
    },
    {
      date: "April 28 (2:10-3:40PM), 2025",
      type: "CHI SIG",
      description:
        "Authors may opt to present at either ICLR or CHI 2025.",
    },
  ],
  submit: {
    platform: {
      name: "OpenReview Submission Portal",
      url: "https://openreview.net/group?id=ICLR.cc/2025/Workshop/Bi-Align",
    },
    format: (
      <span>
        {" "}
        ICLR 2025 <a href={`${process.env.PUBLIC_URL}/images/iclr_2025_bialign_workshop_template.zip`}>BiAlign Workshop Templates .zip Download</a>. 
        We call for <b>2-page</b>(tiny), <b>4-page</b> (short), and <b>9-page</b> (long) papers,  excluding references, fully
        anonymized. 
      </span>
    ),
    type: (
      <span>
        {" "}
      This workshop is optionally archival. Please indicate your selection of an <b>"archival submission"</b> or a <b>"non-archival submission"</b> at the bottom of your OpenReview Submission Portal. The archival option will not influence the review of your submission.
      </span>
    )
  },
  
};

const pcs = [
  { name: "Abhimanyu Pallavi Sudhir,", affiliation: "University of Warwick" },  
  { name: "Alexander Koebler,", affiliation: "Siemens AG" },  
  { name: "Benedikt Schesch,", affiliation: "ETH Zurich" },  
  { name: "Bo Hui,", affiliation: "University of Tulsa" },  
  { name: "Cazalet Tanguy,", affiliation: "Universiteit Gent" },  
  { name: "Changhun Kim,", affiliation: "AITRICS" },  
  { name: "Chenglei Si,", affiliation: "Stanford University" },  
  { name: "Chenyang Yang,", affiliation: "Carnegie Mellon University" },  
  { name: "Chengbo Zheng,", affiliation: "The University of Queensland" },  
  { name: "David T Farr,", affiliation: "University of Washington" }, 
  { name: "Damian Hodel,", affiliation: "University of Washington" },   
  { name: "Diana Robinson,", affiliation: "University of Cambridge" },  
  { name: "Edward Chen,", affiliation: "Stanford University" },  
  { name: "Emiliano Penaloza,", affiliation: "University of Montreal" },  
  { name: "Elizaveta Tennant,", affiliation: "University College London" },  
  { name: "Fengqing Jiang,", affiliation: "University of Washington" },  
  { name: "Florence Xini Doo,", affiliation: "University of Maryland" },  
  { name: "Florian Mai,", affiliation: "University of Bonn" },  
  { name: "Haoyi Qiu,", affiliation: "University of California, Los Angeles" },  
  { name: "He Zhang,", affiliation: "Pennsylvania State University" },  
  { name: "Henry Hengyuan Zhao,", affiliation: "National University of Singapore" },  
  { name: "Hokin Deng,", affiliation: "Johns Hopkins University" },  
  { name: "Ilya Makarov,", affiliation: "ISPRAS" },  
  { name: "Inyoung Cheong,", affiliation: "University of Washington" },  
  { name: "Iyadunni J. Adenuga,", affiliation: "Kean University" },  
  { name: "Karolina Stanczak,", affiliation: "Mila - Quebec AI Institute" },  
  { name: "Kenza Amara,", affiliation: "ETH AI Center" },  
  { name: "Jaewon Kim,", affiliation: "University of Washington" },  
  { name: "Jenny Liang,", affiliation: "Carnegie Mellon University" },  
  { name: "Jiayi Pan,", affiliation: "University of California, Berkeley" },  
  { name: "Jiawei Huang,", affiliation: "ETH Zurich" },  
  { name: "Jingshu Li,", affiliation: "National University of Singapore" },  
  { name: "Jian Chen,", affiliation: "State University of New York at Buffalo" },  
  { name: "Jiří Němeček,", affiliation: "Czech Technical Univeresity in Prague" },  
  { name: "Jiseon Kim,", affiliation: "Korea Advanced Institute of Science and Technology (KAIST)" },  
  { name: "Langlin Huang,", affiliation: "Washington University in Saint Louis (WUSTL)" },  
  { name: "Leila Khaertdinova,", affiliation: "Innopolis University" },  
  { name: "Long-Fei Li,", affiliation: "Nanjing University" },  
  { name: "Masoud Jafaripour,", affiliation: "University of Alberta" },  
  { name: "Masaki Inoue,", affiliation: "Keio University" },  
  { name: "Minbeom Kim,", affiliation: "Seoul National University" },  
  { name: "Neil Natarajan,", affiliation: "University of Oxford" },
  { name: "Navreet Kaur,", affiliation: "University of Washington" },
  { name: "Nicholas Clark,", affiliation: "University of Washington" },
  { name: "Negar Foroutan,", affiliation: "EPFL" },  
  { name: "Orestis Papakyriakopoulos,", affiliation: "Technical University of Munich" },  
  { name: "Priya Ronald DCosta,", affiliation: "University of Pennsylvania" },  
  { name: "Qianou Ma,", affiliation: "Carnegie Mellon University" },  
  { name: "Qiaosi Wang,", affiliation: "Carnegie Mellon University" },  
  { name: "Quan Ze Chen,", affiliation: "University of Washington" },  
  { name: "Ravi Hammond,", affiliation: "University of Oxford" },  
  { name: "Savvas Petridis,", affiliation: "Google DeepMind" },  
  { name: "Siow Meng Low,", affiliation: "Singapore Management University" },  
  { name: "Wenda Li,", affiliation: "University of Michigan - Ann Arbor" },  
  { name: "Wenhao Chai,", affiliation: "University of Washington" },  
  { name: "Ping-Chun Hsieh,", affiliation: "National Chiao Tung University" },  
  { name: "Sehyeok Kang,", affiliation: "Korea Advanced Institute of Science and Technology (KAIST)" },  
  { name: "Sejin Kim,", affiliation: "Gwangju Institute of Science and Technology" },  
  { name: "Simret A Gebreegziabher,", affiliation: "University of Notre Dame" },  
  { name: "Shahan Ali Memon,", affiliation: "University of Washington" },  
  { name: "Shwetha Rajaram,", affiliation: "University of Michigan - Ann Arbor" },  
  { name: "Sruthi Viswanathan,", affiliation: "University of Oxford" },  
  { name: "Sumit Asthana,", affiliation: "University of Michigan - Ann Arbor" },  
  { name: "Sushrita Rakshit,", affiliation: "University of Michigan - Ann Arbor" },  
  { name: "Snehal Prabhudesai", affiliation: "University of Michigan - Ann Arbor" }, 
  { name: "Ruoxi Ning,", affiliation: "University of Waterloo" },  
  { name: "Tian Yu Liu,", affiliation: "University of California, Los Angeles" },  
  { name: "Tuc Van Nguyen,", affiliation: "Indiana University" },  
  { name: "Xiangru Zhu,", affiliation: "Fudan University" },  
  { name: "Xiaoqiang Lin,", affiliation: "National University of Singapore" },  
  { name: "Xinran Zhao,", affiliation: "Carnegie Mellon University" },  
  { name: "Xingjian Zhang,", affiliation: "University of Michigan - Ann Arbor" }, 
  { name: "Xuandong Zhao,", affiliation: "University of California, Berkeley" },  
  { name: "Yifan Zhang,", affiliation: "University of California, Los Angeles" },  
  { name: "Yinghui He,", affiliation: "Princeton University" },  
  { name: "Yige Yuan,", affiliation: "Chinese Academy of Sciences" },  
  { name: "Yongyuan Liang,", affiliation: "University of Maryland, College Park" },  
  { name: "Yutong Xie,", affiliation: "University of Michigan - Ann Arbor" },  
  { name: "Yuwei Bao,", affiliation: "Microsoft" },  
  { name: "Yue (Chris) Fu,", affiliation: "University of Washington" },  
  { name: "Yunzhen Feng,", affiliation: "Stanford University " },  
  { name: "Zhiliang Chen,", affiliation: "National University of Singapore" },  
];


  // { name: "Angelika Romanou,", affiliation: "EPFL" },  
  // { name: "Amna Liaqatu,", affiliation: "Princeton University" },  
  // { name: "Chenglei Si,", affiliation: "Stanford University"},
  // { name: "Chengyang Yang,", affiliation: "Carnegie Mellon University" },
  // { name: "Chengbo Zheng,", affiliation: "The University of Queensland" },
  // { name: "Chris (Yue) Fu,", affiliation: "University of Washington" },
  // { name: "Canyu Chen,", affiliation: "Illinois Institute of Technology" },
  // { name: "Daeun Lee,", affiliation: "University of North Carolina at Chapel Hill" },
  // { name: "Haoyi Qiu,", affiliation: "University of California, Los Angeles" },
  // { name: "He (Albert) Zhang,", affiliation: "Pennsylvania State University" },
  // { name: "Jiayi Pan,", affiliation: "University of California, Berkeley" },
  // { name: "Jenny T. Liang,", affiliation: "Carnegie Mellon University" },
  // { name: "Karolina Stanczak,", affiliation: "Mila Quebec AI Institute / McGill University" },
  // { name: "Negar Foroutan,", affiliation: "EPFL" },
  // { name: "Qiaosi Wang,", affiliation: "Carnegie Mellon University" },
  // { name: "Qianou Christina Ma,", affiliation: "Carnegie Mellon University" },
  // { name: "Riddhiman Dasgupta,", affiliation: "Microsoft" },
  // { name: "Ruoxi Ning,", affiliation: "University of Waterloo" },
  // { name: "Ryan Liu,", affiliation: "Princeton University" },
  // { name: "Shwetha Rajaram,", affiliation: "University of Michigan" },
  // { name: "Sumit Asthana,", affiliation: "University of Michigan" },
  // { name: "Shoubin Yu,", affiliation: "University of North Carolina at Chapel Hill" },
  // { name: "Simret A Gebreegziabher,", affiliation: "University of Notre Dame" },
  // { name: "Simin Fan,", affiliation: "EPFL" },
  // { name: "Snehal Prabhudesai,", affiliation: "University of Michigan"},
  // { name: "Sushrita Rakshit,", affiliation: "University of Michigan"},
  // { name: "Taylor Sorensen,", affiliation: "University of Washington" },
  // { name: "Tuc Van Nguyen,", affiliation: "Indiana University" },
  // { name: "Wenhao Chai,", affiliation: "University of Washington" },
  // { name: "Xinran Zhao,", affiliation: "Carnegie Mellon University" },
  // { name: "Xingjian Zhang,", affiliation: "University of Michigan" },
  // { name: "Xuandong Zhao,", affiliation: "University of California, Berkeley"},
  // { name: "Yongyuan Liang,", affiliation: "University of Maryland, College Park"},
  // { name: "Yi-Hao Peng,", affiliation: "Carnegie Mellon University" },
  // { name: "Yinghui He,", affiliation: "Princeton University" },
  // { name: "Yutong Xie,", affiliation: "University of Michigan" },
  // { name: "Yuwei Bao,", affiliation: "University of California, Los Angeles" },



// const pcs = [
//   { name: "Amna Liaqatu,", affiliation: "Princeton University" },  
//   { name: "Angelika Romanou,", affiliation: "EPFL" },  
//   { name: "Chenglei Si,", affiliation: "Stanford University"},
//   { name: "Chengyang Yang,", affiliation: "Carnegie Mellon University" },
//   { name: "Chengbo Zheng,", affiliation: "The University of Queensland" },
//   { name: "Chris (Yue) Fu,", affiliation: "University of Washington" },
//   { name: "Canyu Chen,", affiliation: "Illinois Institute of Technology" },
//   { name: "Daeun Lee,", affiliation: "University of North Carolina at Chapel Hill" },
//   { name: "Haoyi Qiu,", affiliation: "University of California, Los Angeles" },
//   { name: "He (Albert) Zhang,", affiliation: "Pennsylvania State University" },
//   { name: "Jiayi Pan,", affiliation: "University of California, Berkeley" },
//   { name: "Jenny T. Liang,", affiliation: "Carnegie Mellon University" },
//   // { name: "Liwei Jiang,", affiliation: "University of Washington" },
//   { name: "Karolina Stanczak,", affiliation: "Mila Quebec AI Institute / McGill University" },
//   { name: "Negar Foroutan,", affiliation: "EPFL" },
//   { name: "Qiaosi Wang,", affiliation: "Carnegie Mellon University" },
//   { name: "Qianou Christina Ma,", affiliation: "Carnegie Mellon University" },
//   { name: "Riddhiman Dasgupta,", affiliation: "Microsoft" },
//   { name: "Ruoxi Ning,", affiliation: "University of Waterloo" },
//   { name: "Ryan Liu,", affiliation: "Princeton University" },
//   { name: "Shwetha Rajaram,", affiliation: "University of Michigan" },
//   { name: "Sumit Asthana,", affiliation: "University of Michigan" },
//   { name: "Shoubin Yu,", affiliation: "University of North Carolina at Chapel Hill" },
//   { name: "Simret A Gebreegziabher,", affiliation: "University of Notre Dame" },
//   { name: "Simin Fan,", affiliation: "EPFL" },
//   { name: "Snehal Prabhudesai,", affiliation: "University of Michigan"},
//   { name: "Sushrita Rakshit,", affiliation: "University of Michigan"},
//   { name: "Taylor Sorensen,", affiliation: "University of Washington" },
//   { name: "Tuc Van Nguyen,", affiliation: "Indiana University" },
//   { name: "Wenhao Chai,", affiliation: "University of Washington" },
//   { name: "Xinran Zhao,", affiliation: "Carnegie Mellon University" },
//   { name: "Xingjian Zhang,", affiliation: "University of Michigan" },
//   { name: "Xuandong Zhao,", affiliation: "University of California, Berkeley"},
//   { name: "Yongyuan Liang,", affiliation: "University of Maryland, College Park"},
//   { name: "Yi-Hao Peng,", affiliation: "Carnegie Mellon University" },
//   { name: "Yinghui He,", affiliation: "Princeton University" },
//   { name: "Yutong Xie,", affiliation: "University of Michigan" },
//   { name: "Yuwei Bao,", affiliation: "University of California, Los Angeles" },
// ];

export const schedule: Schedule[] = [
  {
    start: "08:50",
    end: "09:00 (15min)",
    title: "Welcome and Opening Remarks",
  },
  {
    start: "09:00",
    end: "09:30 (30min)",
    title: "Keynote 1: Been Kim, Google DeepMind (Onsite)",
  },
  {
    start: "09:30",
    end: "10:00 (30min)",
    title: "Keynote 2: Frauke Kreuter, LMU Munich and UMD (Virtual)",
  },
  {
    start: "10:00",
    end: "11:10 (70min)",
    title: "Poster and Coffee break",
  },
  {
    start: "11:10",
    end: "11:40 (30min)",
    title: "Keynote 3: Hung-Yi Lee, National Taiwan University (Onsite)",

  },
  {
    start: "11:40",
    end: "12:10 (60min)",
    title: "Keynote 4: Brad Myers, Carnegie Mellon University (Virtual)",
  },
  {
    start: "12:10",
    end: "13:10 (60min)",
    title: "Lunch break",
  },
  {
    start: "13:10",
    end: "13:30 (20min)",
    title: "CHI SIG Presentation  (10min × 2 Papers @CHI)",
  },
  {
    start: "13:30",
    end: "14:00 (30min)",
    title: "Keynote 5: Dan Bohus, Microsoft Research (Virtual)",
  },
  {
    start: "14:00",
    end: "14:30 (30min)",
    title: "Keynote 6: Pavel Izmailov, Anthropic/NYU (Onsite)",
  },
  {
    start: "14:30",
    end: "15:10 (40min)",
    title: "Spotlight Paper Sessions 1 (10min × 4 Papers @ICLR)",
  },
  {
    start: "15:10",
    end: "16:00 (50min)",
    title: "Poster and Discussion Session (Concurrent Coffee break)",
  },
  {
    start: "16:00",
    end: "16:40 (40min)",
    title: "Spotlight Paper Session 2 (10min × 4 Papers @ICLR)",
  },
  {
    start: "16:40",
    end: "17:10 (30min)",
    title: "Keynote 7: Richard Ngo, OpenAI (Onsite)",
  },
  {
    start: "17:10",
    end: "17:50 (40min)",
    title: "Panel Discussion with Experts (Onsite)",
  },
  {
    start: "17:50",
    end: "18:00 (10min)",
    title: "Paper Award Announcement (@ICLR)",
  },
  {
    start: "18:00",
    end: "18:10 (10min)",
    title: "Closing Remarks (@ICLR)",
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
      "Pavel Izmailov is a researcher at Anthropic and an upcoming Assistant Professor at New York University. His research focuses on LLM reasoning, AI for science, and AI alignment. Previously, he worked on reasoning and problem-solving in language models at OpenAI. He contributed to the recent OpenAI o1 models, a new state-of-the-art in LLM reasoning. He has also worked on weak-to-strong-generalization on the superalignment team under Jeff Wu, Jan Leike and Ilya Sutskever. He also had a short stint at xAI reporting to Elon Musk.",
  },
  {
    name: "Richard Ngo",
    type: "AI Safety \& Specification",
    affliation: "OpenAI",
    webpage: "https://www.richardcngo.com/",
    img: "richard.png",
    description:
      "Richard Ngo was a Research Scientist working on the Governance team at OpenAI, focusing on long-term AI safety and alignment. He was previously a research engineer on the AGI safety team at DeepMind. His work explores the development of general intelligence and the challenges of ensuring that advanced AI systems act in ways aligned with human values. He has written extensively on topics such as AI governance, ethics, and the societal impacts of AI. Richard is a prominent voice in the field, regularly contributing to discussions on AI policy and safety, and has a background in philosophy and computer science. He created the My Alignment Fundamentals Curriculum.",
  },
];

const orals: Oral[] = [
  { link: "https://openreview.net/attachment?id=pytJdAOA0X&name=pdf", title: "SafeChain: Safety of Language Models with Long Chain-of-Thought Reasoning Capabilities", authors: "Fengqing Jiang, Zhangchen Xu, Yuetai Li, Luyao Niu, Zhen Xiang, Bo Li, Bill Yuchen Lin, Radha Poovendran"},
  { link: "https://openreview.net/attachment?id=vvSOJqC3f6&name=pdf", title: "AI-enhanced semantic feature norms for 786 concepts", authors: "Siddharth Suresh, Kushin Mukherjee, Tyler Giallanza, Xizheng Yu, Mia Patil, Jonathan D. Cohen, Timothy T. Rogers"},
  { link: "https://openreview.net/attachment?id=AgT3MuT9sh&name=pdf", title: "Societal Impacts Research Requires Usage-Based Benchmarks for Creative Tasks", authors: "Judy Hanwen Shen, Carlos Guestrin"},
  { link: "https://openreview.net/attachment?id=LzApvoBSRj&name=pdf", title: "PARSE-Ego4D: Toward Bidirectionally Aligned Action Recommendations for Egocentric Videos", authors: "Steven Abreu, Tiffany D Do, Karan Ahuja, Eric J Gonzalez, Lee Payne, Daniel McDuff, Mar Gonzalez-Franco"},
  { link: "https://openreview.net/attachment?id=7zxUVXFPez&name=pdf",title: "Representational Alignment Supports Effective Teaching", authors: "Ilia Sucholutsky, Katherine M. Collins, Maya Malaviya, Nori Jacoby, Weiyang Liu, Theodore Sumers, Michalis Korakakis, Umang Bhatt, Mark K Ho, Joshua B. Tenenbaum, Bradley C. Love, Zachary Pardos, Adrian Weller, Thomas L. Griffiths"},
  { link: "https://openreview.net/attachment?id=WKncNqNXOr&name=pdf",title: "InterFeedback: Unveiling Interactive Intelligence of Large Multimodal Models with Human Feedback", authors: "Henry Hengyuan Zhao, Wenqi Pei, Yifei Tao, Haiyang Mei, Mike Zheng Shou"},
  { link: "https://openreview.net/attachment?id=zjr0kJqL9n&name=pdf",title: "Preference Optimization For Concept Bottleneck Models", authors: "Emiliano Penaloza, Tianyue H. Zhang, Laurent Charlin, Mateo Espinosa Zarlenga"},
  { link: "https://openreview.net/attachment?id=uy8IKOWpei&name=pdf",title: "Scalably Solving Assistance Games", authors: "Cassidy Laidlaw, Eli Bronstein, Timothy Guo, Dylan Feng, Lukas Berglund, Justin Svegliato, Stuart Russell, Anca Dragan"},
  { link: "https://openreview.net/attachment?id=ZPTvEUXzSq&name=pdf",title: "Augmenting Image Annotation: A Human–LMM Collaborative Framework for Efficient Object Selection and Label Generation", authors: "HE ZHANG, Xinyi Fu, John Millar Carroll"},
  { link: "https://openreview.net/attachment?id=ncUW9RfbKK&name=pdf",title: "Policy Prototyping for LLMs: Pluralistic Alignment via Interactive and Collaborative Policymaking", authors: "Kevin Feng, Inyoung Cheong, Quan Ze Chen, Amy X Zhang"},
]

const poster: Poster[] = [
  { link: "https://openreview.net/attachment?id=PMUNiNCje7&name=pdf", title: "Envision Human-AI Perceptual Alignment from a Multimodal Interaction Perspective", authors: "Shu Zhong, Marianna Obrist" },
  { link: "https://openreview.net/attachment?id=8AeAmFu4Qf&name=pdf", title: "A Roadmap for Human-Agent Moral Alignment: Integrating Pre-defined Intrinsic Rewards and Learned Reward Models", authors: "Elizaveta Tennant, Stephen Hailes, Mirco Musolesi"},
  { link: "https://openreview.net/attachment?id=mzLBxX84VI&name=pdf", title: "A Benchmark for Scalable Oversight Mechanisms", authors: "Abhimanyu Pallavi Sudhir, Jackson Kaunismaa, Arjun Panickssery"},
  { link: "https://openreview.net/attachment?id=CsCtO2YFn9&name=pdf", title: "Rethinking Anti-Misinformation AI", authors: "Vidya Sujaya, Kellin Pelrine, Andreea Musulan, Reihaneh Rabbany"},
  { link: "https://openreview.net/attachment?id=a64uvvqwRa&name=pdf", title: "Exploring Persona-dependent LLM Alignment for the Moral Machine Experiment", authors: "Jiseon Kim, Jea Kwon, Luiz Felipe Vecchietti, Alice Oh, Meeyoung Cha"},
  { link: "https://openreview.net/attachment?id=3snjOkuzDR&name=pdf", title: "Multi-Objective Probabilistic Preference Learning with Soft and Hard Bounds", authors: "Edward Chen, Sang T. Truong, Natalie Dullerud, Sanmi Koyejo, Carlos Guestrin"},
  { link: "https://openreview.net/attachment?id=64rCWVC78p&name=pdf", title: "We Shape AI, and Thereafter AI Shape Us: Humans Align with AI through Social Influences", authors: "Jingshu Li, Tianqi Song, Beichen Xue, Yi-Chieh Lee"},
  { link: "https://openreview.net/attachment?id=SM16xgEjos&name=pdf", title: "Towards LVLM-Aided Alignment of Task-Specific Vision Models", authors: "Alexander Koebler, Christian Greisinger, Jan Paulus, Ingo Thon, Florian Buettner"},
  { link: "https://openreview.net/attachment?id=uaTEZWeMAu&name=pdf", title: "Patterns and Mechanisms of Contrastive Activation Engineering", authors: "Yixiong Hao, Ayush Panda, Stepan Shabalin, Sheikh Abdur Raheem Ali"},
  { link: "https://openreview.net/attachment?id=8vbMJ3Pmh8&name=pdf", title: "Investigating Alignment Signals in Initial Token Representations", authors: "Carl Rosenblatt"},
  { link: "https://openreview.net/attachment?id=tXl1gdoAoV&name=pdf", title: "CTRL-Rec: Controlling Recommender Systems With Natural Language", authors: "Micah Carroll, Adeline Foote, Marcus Williams, Anca Dragan, W. Bradley Knox, Smitha Milli"},
  { link: "https://openreview.net/attachment?id=O4LaRH4zSI&name=pdf", title: "Position: Interpretability is a Bidirectional Communication Problem", authors: "Kola Ayonrinde"},
  { link: "https://openreview.net/attachment?id=SUNOO5qL3x&name=pdf", title: "OUTLIER-AWARE PREFERENCE OPTIMIZATION FOR LARGE LANGUAGE MODELS", authors: "Pragya Srivastava, Sai Soumya Nalli, Amit Deshpande, Amit Sharma"},
  { link: "https://openreview.net/attachment?id=H1xdhKlN21&name=pdf", title: "TraCeS: Trajectory Based Credit Assignment For Safe Reinforcement Learning", authors: "Siow Meng Low, Akshat Kumar"},
  { link: "https://openreview.net/attachment?id=yGXxvRQwbB&name=pdf", title: "Probing Mechanical Reasoning in Large Vision Language Models", authors: "Haoran Sun, Yijiang Li, Qingying Gao, Haiyun Lyu, Dezhi Luo, Hokin Deng"},
  { link: "https://openreview.net/attachment?id=rmHnNgN5cA&name=pdf", title: "Vision Language Models See What You Want but not What You See", authors: "Qingying Gao, Yijiang Li, Haiyun Lyu, Haoran Sun, Dezhi Luo, Hokin Deng"},
  { link: "https://openreview.net/attachment?id=0fT6h7RAE4&name=pdf", title: "Vision Language Models Know Law of Conservation without Understanding More-or-Less", authors: "Dezhi Luo, Haiyun Lyu, Qingying Gao, Haoran Sun, Yijiang Li, Hokin Deng"},
  { link: "https://openreview.net/attachment?id=U3FXUrEJWT&name=pdf", title: "Human Alignment: How Much We Adapt to LLMs?", authors: "Cazalet Tanguy, Ruben Janssens, Tony Belpaeme, Joni Dambre"},
  { link: "https://openreview.net/attachment?id=3FbMAsfLfU&name=pdf", title: "Moral Alignment for LLM Agents", authors: "Elizaveta Tennant, Stephen Hailes, Mirco Musolesi"},
  { link: "https://openreview.net/attachment?id=oSRqZO2O2O&name=pdf", title: "A Sociotechnical Perspective on Aligning AI with Pluralistic Human Values", authors: "Dalia Ali, Aysenur Kocak, Michèle Wieland, Dora Zhao, Allison Koenecke, Orestis Papakyriakopoulos"},
  { link: "https://openreview.net/attachment?id=wc4MhGEsBH&name=pdf", title: "The Human Visual System Can Inspire New Interaction Paradigms for LLMs", authors: "Diana Robinson, Neil D Lawrence"},
  { link: "https://openreview.net/attachment?id=uDqvsIgCnu&name=pdf", title: "Active Human Feedback Collection via Neural Contextual Dueling Bandits", authors: "Arun Verma, Xiaoqiang Lin, Zhongxiang Dai, Daniela Rus, Bryan Kian Hsiang Low"},
  { link: "https://openreview.net/attachment?id=2K6pDaDYAh&name=pdf", title: "Shared Similarity Between Humans and Chatbots: Exploring Human Willingness to Seek Social Support From Chatbots", authors: "Zicheng Zhu, Tianqi Song, Jefferson Lim, Chi-Lan Yang, Yi-Chieh Lee"},
  { link: "https://openreview.net/attachment?id=mQ1pLtdjbq&name=pdf", title: "Decision preference alignment for large-scale agents based on reward model generation", authors: "Zheng Jiaoling, Xu Weifeng, Luo Qian, Dang Wanli, Geng Long, Gao Guokang, Fan Xingyu, Ren Yulin "},
  { link: "https://openreview.net/attachment?id=HAXNSU8dZv&name=pdf", title: "Societal Alignment Frameworks Can Improve LLM Alignment", authors: "Karolina Stanczak, Nicholas Meade, Mehar Bhatia, Hattie Zhou, Konstantin Böttinger, Jeremy Barnes, Jason Stanley, Jessica Montgomery, Richard Zemel, Nicolas Papernot, Nicolas Chapados, Denis Therien, Timothy P Lillicrap, Ana Marasovic, Sylvie Delacroix, Gillian K Hadfield, Siva Reddy"},
  { link: "https://openreview.net/attachment?id=fCsQcDG1Ul&name=pdf", title: "Processing, Priming, Probing: Human Interventions for Explainability Alignment", authors: "Kenza Amara"},
  { link: "https://openreview.net/attachment?id=WvB9hKKjSc&name=pdf", title: "Superalignment with Dynamic Human Values", authors: "Florian Mai, David Kaczér, Nicholas Kluge Corrêa, Lucie Flek"},
  { link: "https://openreview.net/attachment?id=YsyMLyrLDS&name=pdf", title: "CoPL: Collaborative Preference Learning for Personalizing LLMs", authors: "Youngbin Choi, Seunghyuk Cho, Minjong Lee, MoonJeong Park, Yesong Ko, Jungseul Ok, Dongwoo Kim"},
  { link: "https://openreview.net/attachment?id=LymJGYBScq&name=pdf", title: "Online Learning and Equilibrium Computation with Ranking Feedback", authors: "Mingyang Liu, Yongshan Chen, Zhiyuan Fan, Gabriele Farina, Asuman E. Ozdaglar, Kaiqing Zhang"},
  { link: "https://openreview.net/attachment?id=dXOWrqpyvZ&name=pdf", title: "Drift: Efficient Implicit Personalization of Large Language Models", authors: "Minbeom Kim, Kang-il Lee, Seongho Joo, Hwaran Lee, Kyomin Jung"},
  { link: "https://openreview.net/attachment?id=XkEwFHMv5P&name=pdf", title: "Broaden your SCOPE! Efficient Conversation Planning for LLMs using Semantic Space", authors: "Zhiliang Chen, Xinyuan Niu, Chuan-Sheng Foo, Bryan Kian Hsiang Low"},
  { link: "https://openreview.net/attachment?id=k6Vkm6MqWi&name=pdf", title: "From Intuition to Understanding: Using AI Peers to Overcome Physics Misconceptions", authors: "Ruben Weijers, Denton Wu, Hannah Betts, Yuxiang Guan, Vidya Sujaya, Kushal Dev, Reihaneh Rabbany, Jean-François Godbout, Kellin Pelrine, Tamara Jacod, William Delooze, Ying Wu"},
  { link: "https://openreview.net/attachment?id=Mzza24PyIq&name=pdf", title: "AI Systematically Rewires the Flow of Ideas", authors: "Zhonghao He, Tianyi Qiu, Tao Lin, Moshe Glickman, Atoosa Kasirzadeh, John Wihbey, Max Kleiman-Weiner"},
  { link: "https://openreview.net/attachment?id=4CRMWP1tYc&name=pdf", title: "The Lock-in Hypothesis: Stagnation by Algorithm", authors: "Tianyi Qiu, Zhonghao He, Tejasveer Chugh, Max Kleiman-Weiner"},
  { link: "https://openreview.net/attachment?id=PGsM81SWHt&name=pdf", title: "Monitoring LLM Agents for Sequentially Contextual Harm", authors: "Chen Yueh-Han, Nitish Joshi, Yulin Chen, He He, Rico Angell"},
  { link: "https://openreview.net/attachment?id=jf472MdwsP&name=pdf", title: "Understanding (Un)Reliability of Steering Vectors in Language Models", authors: "Joschka Braun, Carsten Eickhoff, David Krueger, Seyed Ali Bahrainian, Dmitrii Krasheninnikov"},
  { link: "https://openreview.net/attachment?id=E9PzgXCA7J&name=pdf", title: "Observability of Latent States in Generative AI Models", authors: "Tian Yu Liu, Stefano Soatto, Matteo Marchi, Pratik Chaudhari, Paulo Tabuada"},
  { link: "https://openreview.net/attachment?id=XePNb7JiUi&name=pdf", title: "Sycophancy Claims about Language Models: The Missing Human-in-the-Loop", authors: "Jan Batzner, Volker Stocker, Stefan Schmid, Gjergji Kasneci"},
  { link: "https://openreview.net/attachment?id=qs9CTsC32h&name=pdf", title: "D3PO: Preference-Based Alignment of Discrete Diffusion Models", authors: "Umberto Borso, Davide Paglieri, Jude Wells, Tim Rocktäschel"},
  { link: "https://openreview.net/attachment?id=0yBLkJynGy&name=pdf", title: "Addressing and Visualizing Misalignments in Human Task-Solving Trajectories", authors: "Sejin Kim, Hosung Lee, Sundong Kim"},
  { link: "https://openreview.net/attachment?id=XOj2s8faD6&name=pdf", title: "The Alignment Trilemma: A Theoretical Perspective on Recursive Misalignment and Human-AI Adaptation Dynamics", authors: "Tarun Raheja, Nilay Pochhi"},
  { link: "https://openreview.net/attachment?id=OxhHnD9wuZ&name=pdf", title: "Representational Difference Clustering", authors: "Neehar Kondapaneni, Emily Gu, Oisin Mac Aodha, Pietro Perona"},
  { link: "https://openreview.net/attachment?id=97a05ePu0O&name=pdf", title: "SWEPO: Simultaneous Weighted Preference Optimization for Group Contrastive Alignment", authors: "Taneesh Gupta, Rahul Madhavan, Xuchao Zhang, Chetan Bansal, Saravan Rajmohan"},
  { link: "https://openreview.net/attachment?id=pEQwTKmcks&name=pdf", title: "Symmetry-Breaking Augmentations for Ad Hoc Teamwork", authors: "Ravi Hammond, Dustin Craggs, Mingyu Guo, Jakob Nicolaus Foerster, Ian Reid"},
  { link: "https://openreview.net/attachment?id=oC5eZCx3KA&name=pdf", title: "Mitigating Societal Cognitive Overload in the Age of AI: Challenges and Directions", authors: "Salem Lahlou"},
  { link: "https://openreview.net/attachment?id=zQhSOwsQDf&name=pdf", title: "Learning From Diverse Experts: Behavior Alignment Through Multi-Objective Inverse Reinforcement Learning", authors: "Jun-Jie Yang, Qian-You Zhang, Chia-Heng Hsu, Xi Liu, Ping-Chun Hsieh"},
  { link: "https://openreview.net/attachment?id=08E6XX0Yen&name=pdf", title: "Order Independence With Finetuning", authors: "Katrina Brown, Reid McIlroy-Young"},
  { link: "https://openreview.net/attachment?id=1mtgbiN4X1&name=pdf", title: "Trustworthy AI Must Account for Intersectionality", authors: "Jesse C. Cresswell"},
  { link: "https://openreview.net/attachment?id=e13sVlTS3b&name=pdf", title: "Aligning LLMs with Domain Invariant Reward Models", authors: "David Wu, Sanjiban Choudhury"},
  { link: "https://openreview.net/attachment?id=uZxqFZDKLA&name=pdf", title: "Value Alignment in the Global South: A Multidimensional Approach to Norm Elicitation in Indian Contexts", authors: "Atmadeep Ghoshal, Martim Brandao, Ruba Abu-Salma"},
  { link: "https://openreview.net/attachment?id=9teQltJgBo&name=pdf", title: "Inference-time Alignment in Continuous Space", authors: "Yige Yuan, Teng Xiao, Li Yunfan, Xu Bingbing, Shuchang Tao, Yunqi Qiu, Huawei Shen, Xueqi Cheng "},
  { link: "https://openreview.net/attachment?id=NhIp7YdGK6&name=pdf", title: "PILAF: Optimal Human Preference Sampling for Reward Modeling", authors: "Yunzhen Feng, Ariel Kwiatkowski, Kunhao Zheng, Julia Kempe, Yaqi Duan "},
  { link: "https://openreview.net/attachment?id=qu6wD91UIO&name=pdf", title: "Data-adaptive Safety Rules for Training Reward Models", authors: "Xiaomin Li, Mingye Gao, Zhiwei Zhang, Jingxuan Fan, Weiyu Li "},
  { link: "https://openreview.net/attachment?id=QjILdRB10X&name=pdf", title: "Can RLHF be More Efficient with Imperfect Reward Models? A Policy Coverage Perspective", authors: "Jiawei Huang, Bingcong Li, Christoph Dann, Niao He "},
  { link: "https://openreview.net/attachment?id=PUBJyz0WJa&name=pdf", title: "TRIG-Bench: A Benchmark for Text-Rich Image Grounding", authors: "Ming Li, Ruiyi Zhang, Jian Chen, Tianyi Zhou "},
  { link: "https://openreview.net/attachment?id=bT8Wm4jtJC&name=pdf", title: "Beyond Bradley-Terry Models: A General Preference Model for Language Model Alignment", authors: "Yifan Zhang, Ge Zhang, Yue Wu, Kangping Xu, Quanquan Gu "},
  { link: "https://openreview.net/attachment?id=3GCzfMyfsA&name=pdf", title: "A Pilot Study of Weak-to-Strong Generalization in Safety, Toxicity, and Legal Reasoning", authors: "Ruimeng Ye, Yang Xiao, Bo Hui "},
]

const tiny: Tiny[] = [
  { link: "https://openreview.net/attachment?id=8jb5Y5Esvs&name=pdf", title: "Rethinking AI cultural alignment", authors: "Michal Bravansky, Filip Trhlík, Fazl Barez"},
  { link: "https://openreview.net/attachment?id=3qCivWYVDC&name=pdf", title: "Cooperative Agency-Centered LLMs", authors: "Iyadunni J. Adenuga"},
  { link: "https://openreview.net/attachment?id=cbiUItgpoL&name=pdf", title: "Bidirectional Alignment for Inclusive Narrative Generation", authors: "Ken Kawamura"},
  { link: "https://openreview.net/attachment?id=GAt5QTT3kO&name=pdf", title: "ValueMap: Mapping Crowdsourced Human Values to Computational Scores for Bi-directional Alignment", authors: "Priya Ronald DCosta, Rupkatha Hira"},
  { link: "https://openreview.net/attachment?id=BfYx29Lqeu&name=pdf", title: "Negotiative Alignment: An interactive approach to human-AI co-adaptation for clinical applications", authors: "Florence Xini Doo, Nikhil Shah, Pranav Kulkarni, Vishwa Sanjay Parekh, Heng Huang"},
]

export const Iclr2025: Metadata = {
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
