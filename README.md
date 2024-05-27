"# chat_PJT"

### 브랜치 종류 
- main: 최종 배포 브랜치
- develop: 주요 개발 브랜치, 이 브랜치를 기준으로 각자 작업한 기능을 Merge
- feature: 기능 개발 브랜치, 기능 개발이 완료되면 develop 브랜치에 Merge
- feature/frontend/[작업이름]: 프론트 개발
- feature/backend/chat: 채팅 기능 개발
- feature/backend/login: 유저 로그인 기능 개발

> main과 develop 브랜치는 중요한 메인 브랜치이므로 기능이 완성 되기 전까진 commit&merge 조심하기

> 기능 완성되면 develop 브랜치로 merge해서 테스트 후 main으로 merge  

> commit 할때마다 수정 사항 commit 메세지에 간단하게 적기


***

### 커밋 방법
1. git clone '원격 저장소 주소' -> git pull 후 작업 시작
2. git branch '브랜치 이름'
3. git add .
4. git commit -m "커밋 메세지"
5. git push

