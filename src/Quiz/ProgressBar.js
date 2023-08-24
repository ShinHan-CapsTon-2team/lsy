import styled from "styled-components";

const ProgressBarContainer = styled.div`
width: 50vw;
height: 2vh;
background-color: #e0e0e0;
border-radius: 5px;
margin-top: 10px;

/* tablet 규격 */
        @media screen and (max-width: 1023px){
          width: 50vw;
          height: 1.5vh;
          margin-top: 10px;
        }

        /* mobile 규격 */
        @media screen and (max-width: 540px){
          height: 1vh;
        }
        /* s 데스크 */
        @media screen and (min-width: 1024px){
            
        }
        /* l 데스크 */
        @media screen and (min-width: 1700px){
            
        }

`;

const ProgressBarFill = styled.div`
width: ${props => props.progress}%;
height: 100%;
background-color: #798BE6;
border-radius: 5px;
`;

const ProgressBar = ({ total, current }) => {
const progress = (current / total) * 100;

return (
  <ProgressBarContainer>
    <ProgressBarFill progress={progress} />
  </ProgressBarContainer>
);
};
export default ProgressBar;