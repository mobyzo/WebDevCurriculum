# Quest 00. Hello, git


## Introduction
* git은 2020년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`
  * `git add`
  * `git commit`
  * `git push`
  * `git pull`
  * `git branch`
  * `git stash`
* GitHub

## Resources
* https://rogerdudler.github.io/git-guide/index.ko.html
* https://try.github.io
* http://pcottle.github.io/learnGitBranching

## Checklist
* 형상 관리 시스템은 왜 필요한가요? 이 시스템이 개발에 있어서 어떤 도움을 줄까요?
* 중앙집중형 형상 관리 시스템와 분산형 형상 관리 시스템은 어떻게 다른가요? git은 어디에 속해 있고 왜 그렇게 설계되었을까요?
* git의 `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
* 만약 직접 형상 관리 시스템을 만든다면 어떤 식으로 이력을 저장하면 좋을지 한 번 생각해 봅시다. 그리고 난 후 다음의 질문에 대해 조사해 봅시다:
  * git은 실제로 이력을 어떤 식으로 저장하고 관리하나요? 

## Quest
* github에 가입한 뒤, [이 커리큘럼의 github 저장소](https://github.com/Knowre-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* 커맨드라인용 git을 설치합니다.
  * MacOS의 경우에는 [Homebrew](https://brew.sh/index_ko)를 이용하는 것을 권장합니다.
  * Windows의 경우는 [GitHub Desktop](https://desktop.github.com/)을 설치한 후 같이 설치된 git shell을 이용하는 것을 권장합니다.
* 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.
