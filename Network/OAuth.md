OAuth(Open Authorization)는 클라이언트가 사용자의 계정 정보에 접근할 수 있게 해주는 개방형 표준 프로토콜이다. 소셜 로그인과 같은 기능을 제공하여 사용자가 회원 가입 및 관리를 따로 할 필요 없이 서비스를 사용할 수 있게 한다.

## OAuth의 주요 구성 요소

- **Resource Owner**: OAuth를 통해 소셜 로그인을 하고자 하는 사용자를 가리킨다. 사용자의 정보는 'Resource'로, 이 정보의 주인이 사용자이므로 Resource Owner라고 부른다.
- **Resource Server**: 사용자의 정보를 저장하고 있는 서버를 가리킨다. 이는 Naver, Kakao, Google 등이 될 수 있다.
- **Authorization Server**: 인증을 담당하고 있는 서버를 가리킨다.
- **Application**: 소셜 로그인을 활용해 이용하고자 하는 서비스를 의미한다.

# OAuth Grant Type 상세 설명

## 1. Implicit Grant Type

Implicit Grant Type은 웹 어플리케이션에서 사용되는 간단한 흐름이다.

1. **접속**: 사용자가 Application을 방문하고 로그인을 시도한다.
1. **인증 요청**: Application은 사용자를 Authorization Server로 리다이렉트하며, 이 과정에서 필요한 정보(응답 타입, 클라이언트 ID, 리다이렉트 URI 등)를 함께 보낸다.
1. **유효 확인 및 토큰 발급**: Authorization Server는 사용자의 유효성을 확인하고 액세스 토큰을 발급한다.
1. **토큰 전달**: Authorization Server는 사용자를 Application으로 리다이렉트하며, 이 때 액세스 토큰이 URI의 일부로 전달된다.
1. **정보 요청**: Application은 액세스 토큰을 사용하여 Resource Server에 정보를 요청한다.
1. **유효 토큰 확인**: Resource Server는 토큰의 유효성을 확인한다.
1. **정보 전달**: 유효성 검사가 완료되면, Resource Server는 요청한 정보를 Application에 전달한다.

보안 측면에서는 이 방식이 취약하므로, 소셜 로그인에서는 잘 사용되지 않는다.

## 2. Authorization Code Grant Type

Authorization Code Grant Type은 웹 어플리케이션에서 가장 많이 사용되는 흐름이다. 인증 코드가 추가되어 보안성이 향상된다.

1. **접속**: 사용자가 Application을 방문하고 로그인을 시도한다.
1. **인증 요청**: Application은 사용자를 Authorization Server로 리다이렉트하며, 이 과정에서 필요한 정보(응답 타입, 클라이언트 ID, 리다이렉트 URI 등)를 함께 보낸다.
1. **유효 확인 및 코드 발급**: Authorization Server는 사용자의 유효성을 확인하고 인증 코드를 발급한다.
1. **코드 전달**: Authorization Server는 사용자를 Application으로 리다이렉트하며, 이 때 인증 코드가 URI의 일부로 전달된다.

이 방식은 편의성이 조금 떨어질 수 있지만, 보안성이 향상된다.

## 3. Refresh Token Grant Type

Refresh Token Grant Type은 만료된 액세스 토큰을 갱신하기 위한 흐름이다.

1. **리프레시 토큰 전달**: 사용자는 리프레시 토큰을 Authorization Server에 보낸다.
1. \*\*유효 확인 및

액세스 토큰 발급\*\*: Authorization Server는 리프레시 토큰의 유효성을 확인하고 새로운 액세스 토큰을 발급한다.

1. **정보 요청 및 전달**: Application은 새로 발급받은 액세스 토큰을 사용하여 Resource Server에서 정보를 받아온다.

이 방식은 사용자가 서비스를 지속적으로 이용할 수 있도록 도와준다.

OAuth의 장점으로는 쉽고 안전하게 새로운 서비스를 이용할 수 있고, 권한 영역 설정이 가능하다는 점이 있다.
