import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// 테스트 전 서버 수신 대기
beforeAll(() => server.listen());

// 각 테스트가 끝나면 핸들러를 서버 정의 시 핸들러로 재설정
afterEach(() => server.resetHandlers());

// 전부 끝나면 서버를 닫음
afterAll(() => server.close());
