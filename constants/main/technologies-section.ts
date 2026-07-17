import {
    arduino,
    cplusplus,
    css,
    cura,
    docker,
    fusion360,
    fluxai,
    git,
    html,
    illustrator,
    javascript,
    linux,
    mathematica,
    matlab,
    matplotlib,
    numpy,
    optimumlap,
    proxmox,
    python,
    reactjs,
    solidworks,
    tailwind,
    threejs,
    truenas,
    vscode,
    xd,
} from "../../assets";

const skillIcons = [
    { imgURL: solidworks, name: "Solidworks" },
    { imgURL: fusion360, name: "Fusion360" },
    { imgURL: matlab, name: "MATLAB" },
    { imgURL: cplusplus, name: "C++" },
    { imgURL: python, name: "Python" },
    { imgURL: fluxai, name: "Flux AI" },
    { imgURL: reactjs, name: "React JS" },
    { imgURL: tailwind, name: "Tailwind" },
    { imgURL: vscode, name: "VSCode" },
    { imgURL: git, name: "Git" },
];

const skills = [
  { 
      type: "Software Development", 
      list: [
          "Python",
          "C++",
          "Typescript",
          "Rust",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Next.JS",
          "Git/Github",
      ]
  },
  { 
      type: "Physics Research", 
      list: [
          "Python",
          "Pytorch",
          "Tensorflow",
          "MATLAB",
          "R",
          "LaTeX",
          "GPIB",
      ]
  },
  { 
    type: "Engineering", 
    list: [
        "Solidworks",
        "Fusion 360",
        "MATLAB",
        "ECAD",
    ]
  },
];



export {skills,
        skillIcons};