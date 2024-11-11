"use client";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { Range } from "react-range";

const RangeTag = () => {
  const [values, setValues] = useState([50, 200]);
  const MIN = 0;
  const MAX = 300;

  return (

      <PriceContainer>
        <PriceWraper>
          <PriceHeading>Price</PriceHeading>
          <UpArrow src={"/img/up.svg"} width={16} height={16}  alt="upImg"/>
        </PriceWraper>

        {/* Range Slider */}
        <Range
          values={values}
          step={1}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <Track
              {...props}
              style={{
                ...props.style,
                background: `linear-gradient(to right, #e0e0e0 ${
                  ((values[0] - MIN) / (MAX - MIN)) * 100
                }%, black ${((values[0] - MIN) / (MAX - MIN)) * 100}%, black ${
                  ((values[1] - MIN) / (MAX - MIN)) * 100
                }%, #e0e0e0 ${((values[1] - MIN) / (MAX - MIN)) * 100}%)`,
              }}
            >
              {children}
            </Track>
          )}
          renderThumb={({ props, index }) => (
            <Thumb {...props} style={{ ...props.style }}>
              {/* Optional: display current value inside the thumb */}
              <ThumbLabel>{values[index]}</ThumbLabel>
            </Thumb>
          )}
        />
        <RangeValues>
          <span>${values[0]}</span>
          <span>${values[1]}</span>
        </RangeValues>
      </PriceContainer>
    
  );
};

export default RangeTag;

const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #0000001a;
  margin-bottom: 1.5rem;
  margin: 0;
`;

const PriceWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:1.25rem;
`;

const PriceHeading = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

const UpArrow = styled(Image)``;

const Track = styled.div`
  height: 8px;
  width: 100%;
  background: #e0e0e0;
  position: relative;
  border-radius: 20px;
`;

const Thumb = styled.div`
  height: 25px;
  width: 25px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbLabel = styled.div`
  color: white;
  font-size: 10px;
`;

const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;
