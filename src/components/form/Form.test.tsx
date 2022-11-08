import { Form } from "./Form";

describe("Given the Form component", () => {
    let mockValue: "TestName1";
    let mockContext = {
        foods: [],
        handleLoad: () => undefined,
        handleAdd: () => undefined,
        handleDelete: () => undefined,
        handleUpdate: () => undefined,
        setInputValue: () => undefined,
        inputValue: "",
        detailsId: "",
        setDetailsId: () => undefined,
        pageIndex: 1,
        setPageIndex: () => undefined,
        loading: true,
        errorMessage: "",
    };
    beforeEach(() => {});

    test("when we write something to the input text", () => {});
});
