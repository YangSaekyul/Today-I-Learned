# Git 브랜치 활용 순서

**main 브랜치에서 새로운 작업 시작**

```
git checkout main
```

**main 브랜치를 최신 상태로 업데이트**

```
git pull origin main
```

**새로운 브랜치 생성**

- 브랜치명은 팀의 명명 규칙을 따르되, 일반적으로 해당 작업의 특성을 잘 표현하도록 만든다.
- 예시: feature/add-new-button, bugfix/fix-login-issue

```
git checkout -b feature/add-new-button

```

1. **새로운 브랜치에서 필요한 작업 수행**
2. **작업 완료 후 상태 확인**

```
git status
```

**변경된 파일들을 스테이지에 올림**

```
git add .
```

**스테이지에 올린 변경 사항들을 커밋**

- 커밋 메시지는 변경 사항을 명확하게 알 수 있도록 작성한다.
- 예시: "버튼 추가 완료"

```
git commit -m "버튼 추가 완료"
```

**작업한 브랜치를 원격 저장소에 푸시**

```
git push origin feature/add-new-button
```

1. **원격 저장소 (예: GitHub, GitLab 등)에서 main 브랜치로 Pull Request (또는 Merge Request) 생성**
2. **동료들의 코드 리뷰 받음**
3. **코드 리뷰에서 수정이 필요한 부분이 있다면 수정 후 다시 푸시하고, 리뷰를 통과하면 main 브랜치로 머지**

팀마다, 프로젝트마다 조금씩 다른 컨벤션을 가질 수 있으므로, 해당 팀의 규칙과 컨벤션을 잘 이해하고 적용하는 것이 중요하다.

## 실제 활용

`homepage` 브랜치에서 작업한 내용을 `main` 브랜치에 넣으려면 다음과 같은 순서로 진행하면 된다:

먼저, 현재 브랜치에서의 모든 변경사항을 커밋하거나 스테이시하고, `homepage` 브랜치로 이동한다.

```
git checkout homepage
```

`homepage` 브랜치에서의 모든 변경사항을 커밋한다.

```
git add .
git commit -m "homepage 작업 내용 커밋"
```

`main` 브랜치로 체크아웃한 후, `homepage` 브랜치를 `main` 브랜치에 병합(merge)한다.

```
git checkout main
git merge homepage
```

병합한 후, `main` 브랜치를 원격 저장소에 푸시한다.

```
git push origin main
```

위의 단계를 통해 `homepage` 브랜치에서 작업한 파일 전체를 `main` 브랜치에 병합할 수 있다. 병합 과정에서 충돌이 발생하면, 해당 부분을 해결한 후 다시 커밋하고 푸시해야 한다.

## 삭제

git branch -d 로 작업한 모든 브랜치를 삭제했는데 레포지토리에는 남아있는 이유가 뭘까?

`git branch -d` 명령어는 로컬 브랜치를 삭제하는 명령이다. 이 명령을 사용하여 로컬의 브랜치를 삭제해도 원격 저장소(GitHub, GitLab 등)에 있는 브랜치는 삭제되지 않는다.

원격 저장소에 있는 브랜치를 삭제하려면 `git push` 명령어를 사용해야 한다. 아래와 같이 명령을 입력하면 원격 저장소의 특정 브랜치를 삭제할 수 있다.

```
git push origin --delete 브랜치명
```

위의 명령어를 실행하면 'origin'이라는 원격 저장소에 있는 '브랜치명'이라는 브랜치가 삭제된다. 이때 '브랜치명' 대신에 삭제하고 싶은 브랜치의 이름을 입력해야 한다.
