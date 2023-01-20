// MAKE SURE MAGNIFIER CAN BECOME PLACEHOLDER

import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';

import styled from 'styled-components';

const Searchbox = () => {
  const addfilterA = () => {
    console.log("ayam goreng")
  }
  return(
    <Stack direction="horizontal" gap={3}>
      <StContainer fluid >
        <InputGroup>
          <InputGroup.Text id="basic-addon1" variant="light"><img src="assets/img/magnifier.svg" alt="search"/></InputGroup.Text>
          <Form.Control
            placeholder="Find heroes..."
            aria-label="search"
          />
        </InputGroup>
      </StContainer>
      <StContainerDropdown>
        <InputGroup>
            <Dropdown>
              <StDropdown variant="light" id="dropdown-basic">
                <Stack direction="horizontal" gap={1}>
                  <img src="assets/img/filter.svg" alt=""/>
                  Filter
                </Stack>
              </StDropdown>

              <Dropdown.Menu>
                <Dropdown.Item onClick={addfilterA}>A</Dropdown.Item>
                <Dropdown.Item onClick={addfilterA}>B</Dropdown.Item>
                <Dropdown.Item onClick={addfilterA}>AB</Dropdown.Item>
                <Dropdown.Item onClick={addfilterA}>O</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
      </StContainerDropdown>
    </Stack>
  );
};

export default Searchbox;

const StContainer = styled(Container)`
  padding-left: 0px;
  margin-bottom: 18px;
`

const StContainerDropdown = styled.div`
  margin-block-start: auto;
  margin-bottom: 18px;
`

const StDropdown = styled(Dropdown.Toggle)`
  &::after{
    display: none;
  }     
`