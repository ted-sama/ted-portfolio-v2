import React from "react";
import LazyLoad from "react-lazyload";
import {
  ProjectItemContainer,
  ProjectItemContent,
  ProjectItemImage,
  ProjectItemTitle,
  ProjectItemDescription,
  ProjectItemTags,
  ProjectItemLinks,
} from "./ProjectItemStyles";

const ProjectItem = ({
  image,
  name,
  description,
  linkTo,
  linkToGithub,
  tags,
}) => {
  return (
    <ProjectItemContainer id="container">
      <LazyLoad height={200}>
        <ProjectItemImage id="image">
          <a href={linkTo}>
            <img src={image} alt={name} />
          </a>
        </ProjectItemImage>
      </LazyLoad>
      <ProjectItemContent id="content">
        <ProjectItemTitle>
          <a href={linkTo} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </ProjectItemTitle>
        <ProjectItemDescription>{description}</ProjectItemDescription>
        <ProjectItemTags>
          {tags?.map((tag) => (
            <li key={tag.id}>{tag}</li>
          ))}
        </ProjectItemTags>
        <ProjectItemLinks>
          <a
            href={linkToGithub}
            aria-label="Github Link"
            rel="noopener noreferrer"
            target={"_blank"}
            title="Github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              style={{ fill: "#000000" }}
            >
              <g
                fillRule="evenodd"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M15.935,22.006c0.005,-0.002 0.009,-0.004 0.014,-0.006c3.982,-1.575 6.801,-5.461 6.801,-10c0,-5.933 -4.817,-10.75 -10.75,-10.75c-5.933,0 -10.75,4.817 -10.75,10.75c0,4.539 2.819,8.424 6.798,10.005c0.005,0.002 0.01,0.004 0.015,0.006c0.384,0.143 0.814,0.089 1.151,-0.145c0.336,-0.234 0.537,-0.619 0.536,-1.029v-2.137c0,-0.49 0.162,-0.962 0.509,-1.308c0.149,-0.149 0.32,-0.27 0.507,-0.36c0.286,-0.137 0.455,-0.441 0.42,-0.758c-0.035,-0.316 -0.265,-0.576 -0.575,-0.648c-1.986,-0.462 -3.494,-1.891 -3.494,-3.643c0,-0.731 0.269,-1.41 0.724,-1.984c0.15,-0.189 0.2,-0.439 0.134,-0.671c-0.163,-0.573 -0.157,-1.14 -0.117,-1.544c0.719,0.09 1.19,0.345 1.473,0.581c0.201,0.168 0.475,0.219 0.723,0.135c0.598,-0.204 1.256,-0.317 1.946,-0.317c0.69,0 1.348,0.113 1.946,0.317c0.248,0.084 0.522,0.033 0.723,-0.135c0.283,-0.236 0.754,-0.491 1.473,-0.581c0.04,0.404 0.046,0.971 -0.117,1.544c-0.066,0.232 -0.016,0.482 0.134,0.671c0.455,0.574 0.724,1.253 0.724,1.984c0,1.752 -1.508,3.181 -3.494,3.643c-0.31,0.072 -0.54,0.332 -0.575,0.648c-0.035,0.317 0.134,0.621 0.42,0.758c0.187,0.09 0.358,0.211 0.507,0.36c0.347,0.346 0.509,0.818 0.509,1.308v0c0,0 0,1.3 0.005,2.143c0,0.404 0.199,0.786 0.535,1.018c0.335,0.233 0.762,0.287 1.145,0.145zM15.753,20.456c-0.003,-0.802 -0.003,-1.756 -0.003,-1.756c0,-0.754 -0.229,-1.48 -0.682,-2.067c1.993,-0.908 3.315,-2.669 3.315,-4.65c0,-0.947 -0.297,-1.839 -0.827,-2.615c0.27,-1.346 -0.066,-2.566 -0.066,-2.566c-0.089,-0.324 -0.381,-0.549 -0.716,-0.552c-1.292,-0.012 -2.163,0.342 -2.726,0.712c-0.641,-0.18 -1.33,-0.279 -2.048,-0.279c-0.718,0 -1.407,0.099 -2.049,0.279c-0.563,-0.37 -1.433,-0.724 -2.725,-0.712c-0.335,0.003 -0.627,0.228 -0.716,0.552c0,0 -0.336,1.22 -0.066,2.568c-0.53,0.774 -0.827,1.666 -0.827,2.613c0,1.981 1.322,3.742 3.315,4.65c-0.453,0.587 -0.682,1.313 -0.682,2.067v1.763c-3.238,-1.444 -5.5,-4.691 -5.5,-8.463c0,-5.105 4.145,-9.25 9.25,-9.25c5.105,0 9.25,4.145 9.25,9.25c0,3.769 -2.259,7.015 -5.497,8.456z"></path>
                </g>
              </g>
            </svg>
          </a>
        </ProjectItemLinks>
      </ProjectItemContent>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
