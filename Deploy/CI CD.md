# CI : 지속적 통합

- Code : 개발자가 코드를 원격 코드 저장소에 Push
- Build : 원격 코드 저장소로부터 코드를 가져와 유닛 테스트 후 빌드
- Test : 코드 빌드의 결과물이 달느 컴포넌트와 잘 통합되는지 확인

# CD : 지속적 배포

- Release : 배포 가능한 소프트웨어 패키지 작성
- Deploy : 프로비저닝을 실행하고 서비스를 사용자에게 노출, 실질적인 배포
- Operate : 서비스 현황 파악, 문제 감지

# CI/CD 파이프라인

과정을 여러 단계로 분리함

- Source : 소스 코드에 변경 사항이 일어날 경우, 이를 감지하고 다음 단계로 전달
- Build : 전달받은 코드를 컴파일, 빌드, 테스트하여 가공 후 다음 단계로 전달
- Deploy : 실제 서비스에 반영
