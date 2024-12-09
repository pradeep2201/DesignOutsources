import React from "react";
import styled from "styled-components";
import MessageIcon from "../../../assets/icon/Message-Mail.svg";
import TelephoneIcon from "../../../assets/icon/Telephone.svg";
import LocationIcon from "../../../assets/icon/Location.svg";
import MapIcon from "../../../assets/icon/Map-Location1.svg";

const CardContainer = styled.div`
  background: #1976d2;
  color: white;
  padding: 20px;
  border-radius: 10px;
  height: 92%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const CardSubContainer = styled.div`
  padding: 5rem;
  align-items: center;
`;

const Heading = styled.h1`
  margin-left: 23px;
  font-size: 2rem;
  font-weight: bold;
  // align-items: center;
  // justify-content: center;
  display: flex;
  padding-bottom: 30px;
`;

const InfoRow = styled.div`
  padding-left: 15px;
  gap: 10px;
  font-size: 1rem;
  align-items: center;
  display: flex;
  padding-bottom: 20px;
`;

const InfoText = styled.span`
  margin-left: 35px;
`;

const InfoIcon = styled.span`
  vertical-align: middle;
  padding-left: 4px;
`;

const Icon = styled.span`
  font-size: 1.2rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: underline;
  font-size: 1rem;
  padding-left: 48px;

  &:hover {
    text-decoration: none;
  }
`;

const ContactCard = () => {
  return (
    <CardContainer>
      <CardSubContainer>
        <Heading>Get in Touch</Heading>
        <InfoRow>
          <img src={MessageIcon} width="40" height="40" />

          <InfoText>
            <span>editors.support@designoutsources.com</span>{" "}
          </InfoText>
        </InfoRow>
        <InfoRow>
          <img src={TelephoneIcon} width="40" height="40" />
          <InfoText>
            {" "}
            <span>(+91) 73582 39850</span>{" "}
          </InfoText>
        </InfoRow>
        <InfoRow>
          <img src={LocationIcon} width="45" height="45" />
          <InfoText>
            <span>Salem, Tamil Nadu, India</span>
          </InfoText>
        </InfoRow>{" "}
        <InfoRow>
          <Link
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            PaddingLeft="50px"
          >
            <InfoText>
              <span>Get directions</span>
            </InfoText>{" "}
            <InfoIcon>
              {" "}
              <span>
                <img src={MapIcon} width="16" height="16" />
              </span>
            </InfoIcon>
          </Link>{" "}
        </InfoRow>
      </CardSubContainer>
    </CardContainer>
  );
};

export default ContactCard;
