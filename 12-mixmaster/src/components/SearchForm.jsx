import styled from "styled-components";
import { Form, useNavigation } from "react-router-dom";

function SearchForm({ searchTerm }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default SearchForm;
