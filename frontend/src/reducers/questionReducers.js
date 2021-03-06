import {
  ANSWER_DELETE_FAIL,
  ANSWER_DELETE_REQUEST,
  ANSWER_DELETE_SUCCESS,
  ANSWER_UPDATE_FAIL,
  ANSWER_UPDATE_REQUEST,
  ANSWER_UPDATE_RESET,
  ANSWER_UPDATE_SUCCESS,
  QUESTION_CLOSE_FAIL,
  QUESTION_CLOSE_REQUEST,
  QUESTION_CLOSE_RESET,
  QUESTION_CLOSE_SUCCESS,
  QUESTION_CREATE_ANSWER_FAIL,
  QUESTION_CREATE_ANSWER_REQUEST,
  QUESTION_CREATE_ANSWER_RESET,
  QUESTION_CREATE_ANSWER_SUCCESS,
  QUESTION_CREATE_FAIL,
  QUESTION_CREATE_REQUEST,
  QUESTION_CREATE_RESET,
  QUESTION_CREATE_SUCCESS,
  QUESTION_DELETE_FAIL,
  QUESTION_DELETE_REQUEST,
  QUESTION_DELETE_SUCCESS,
  QUESTION_DETAILS_FAIL,
  QUESTION_DETAILS_REQUEST,
  QUESTION_DETAILS_SUCCESS,
  QUESTION_LIST_FAIL,
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_RESET,
  QUESTION_LIST_SUCCESS,
  QUESTION_UPDATE_FAIL,
  QUESTION_UPDATE_REQUEST,
  QUESTION_UPDATE_RESET,
  QUESTION_UPDATE_SUCCESS,
} from "../constants/questionConstants";

export const questionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_CREATE_REQUEST:
      return { loading: true };
    case QUESTION_CREATE_SUCCESS:
      return { loading: false, success: true, question: action.payload };
    case QUESTION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case QUESTION_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const questionListReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case QUESTION_LIST_REQUEST:
      return { loading: true };
    case QUESTION_LIST_SUCCESS:
      return { loading: false, questions: action.payload };
    case QUESTION_LIST_FAIL:
      return { loading: false, error: action.payload };
    case QUESTION_LIST_RESET:
      return {
        users: [],
      };
    default:
      return state;
  }
};

export const questionUpdateReducer = (state = { question: {} }, action) => {
  switch (action.type) {
    case QUESTION_UPDATE_REQUEST:
      return { loading: true };
    case QUESTION_UPDATE_SUCCESS:
      return { loading: false, success: true, question: action.payload };
    case QUESTION_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case QUESTION_UPDATE_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const questionDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_DELETE_REQUEST:
      return { loading: true };
    case QUESTION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case QUESTION_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const questionDetailsReducer = (
  state = { question: { answers: [] } },
  action
) => {
  switch (action.type) {
    case QUESTION_DETAILS_REQUEST:
      return { loading: true, ...state };
    case QUESTION_DETAILS_SUCCESS:
      return { loading: false, question: action.payload };
    case QUESTION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const questionAnswerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_CREATE_ANSWER_REQUEST:
      return { loading: true };
    case QUESTION_CREATE_ANSWER_SUCCESS:
      return { loading: false, success: true };
    case QUESTION_CREATE_ANSWER_FAIL:
      return { loading: false, error: action.payload };
    case QUESTION_CREATE_ANSWER_RESET:
      return {};
    default:
      return state;
  }
};

export const answerUpdateReducer = (state = { answer: {} }, action) => {
  switch (action.type) {
    case ANSWER_UPDATE_REQUEST:
      return { loading: true };
    case ANSWER_UPDATE_SUCCESS:
      return { loading: false, success: true, answer: action.payload };
    case ANSWER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ANSWER_UPDATE_RESET:
      return {
        answer: {},
      };
    default:
      return state;
  }
};

export const answerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ANSWER_DELETE_REQUEST:
      return { loading: true };
    case ANSWER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ANSWER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const questionCloseReducer = (state = { question: {} }, action) => {
  switch (action.type) {
    case QUESTION_CLOSE_REQUEST:
      return { loading: true };
    case QUESTION_CLOSE_SUCCESS:
      return { loading: false, success: true, question: action.payload };
    case QUESTION_CLOSE_FAIL:
      return { loading: false, error: action.payload };
    case QUESTION_CLOSE_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};
