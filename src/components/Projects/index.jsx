import React from "react";
import ProjectItem from "../ProjectItem";
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsTitle,
  ProjectsHeading,
  ProjectsList,
  ProjectsLinks,
} from "./ProjectsStyles";
import chooeichaImg from "../../assets/projects_img/chooeicha.png";
import pokedexImg from "../../assets/projects_img/pokedex.png";
import tastifyImg from "../../assets/projects_img/tastify.png";

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsTitle>Mes projets</ProjectsTitle>
      <ProjectsContainer>
        <ProjectsHeading>
          Voici une sélection de quelques uns de mes projets.
        </ProjectsHeading>
        <ProjectsList>
        <ProjectItem
            image={tastifyImg}
            name={"Tastify!"}
            description={`
                Un site web qui utilise l'API Spotify pour afficher les données Spotify 
                d'un utilisateur. Il permet de voir des statistiques comme le top artistes
                ou encore le top titres de l'utilisateur.
            `}
            tags={["Vue", "API", "TailwindCSS"]}
            linkTo={"https://tedtastify.netlify.app/"}
            linkToGithub={"https://github.com/ted-sama/tastify"}
          />
          <ProjectItem
            image={chooeichaImg}
            name={"Chooeicha"}
            description={`
            Expérimentation en TypeScript et React.
            Utilisation de l’API Jikan qui récupère les données du site
            MyAnimeList pour afficher les listes des mangas et animes du
            moment, en utilisant une interface type Netflix
            `}
            tags={["React", "TypeScript", "API", "UI/UX"]}
            linkTo={"https://chooeicha.netlify.app/"}
            linkToGithub={"https://github.com/ted-sama/typescript-react-jikan"}
          />
          <ProjectItem
            image={pokedexImg}
            name={"JSPokédex"}
            description={`
                Projet en JavaScript pour apprendre à utiliser une API. 
                Je récupère les données de l'API PokéAPI et les affiche dans une
                interface simpliste qui fonctionne comme un Pokédex.
            `}
            tags={["JavaScript", "PokéAPI", "CSS"]}
            linkTo={"https://pokedex-ted.netlify.app/"}
            linkToGithub={"https://github.com/ted-sama/PokedexWeb"}
          />
        </ProjectsList>
      </ProjectsContainer>
      <ProjectsLinks>
        <a
          href="https://github.com/ted-sama"
          aria-label="Github Link"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          Plus sur Github
        </a>
      </ProjectsLinks>
    </ProjectsSection>
  );
};

export default Projects;
