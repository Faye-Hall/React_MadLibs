import React from "react";
import "./Story.css";

function Story(props) {
  return (
    <div className="story-div">
      "There many <span>{props.adjective_1}</span> ways to teach a/an{" "}
      <span>{props.noun_1}</span> to read. First, you could ask for{" "}
      recommandations from your friends and <span>{props.plural_noun}</span>.{" "}
      Just don't ask Aunt <span>{props.female_name}</span> -she only reads{" "}
      <span>{props.adjective_2}</span> books with{" "}
      <span>{props.article_of_clothing}</span>-ripping goddesses on the cover.{" "}
      If your friends and family are no help, try checking out the{" "}
      <span>{props.noun_2}</span> Review in The <span>{props.a_city}</span>{" "}
      Times, or head over to your local library or <span>{props.a_place}</span>{" "}
      and browse the shelves until something catches your{" "}
      <span>{props.a_body_part}</span>."
    </div>
  );
}

export default Story;
