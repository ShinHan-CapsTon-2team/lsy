import styled from "styled-components";



const Dsecription = () => {


return (
  <ContentRadius>
    <Five>
    </Five>
  </ContentRadius>
);
};
export default Dsecription;

const ContentRadius = styled.div`
border: 3px #3A76EF solid;
padding: 20px;
word-wrap: break-word;
opacity: 0.90;
border-radius: 31px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

margin-top: 20px;

@media screen and (min-height: 900px) {
    margin-top: 30px;
    border: 4px #3A76EF solid;
};
`;

const Five = styled(ContentRadius)`

position: relative;

overflow: hidden;
text-align: center;
height:auto;
margin-bottom : 3vh;
`;