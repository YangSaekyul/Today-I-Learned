# AWS EC2: 아마존의 클라우드 컴퓨팅 서비스

아마존 웹서비스(AWS)의 대표적인 클라우드 컴퓨팅 서비스인 EC2는 사용자에게 가상의 컴퓨터 환경을 제공한다. "Elastic"이라는 단어에서 알 수 있듯이, 이 서비스는 유연하게 확장 및 축소가 가능한 특징을 가진다.

## 목차

1. [EC2의 기본 개념](#ec2의-기본-개념)
2. [비용과 사용법](#비용과-사용법)
3. [AMI와 인스턴스](#ami와-인스턴스)

## EC2의 기본 개념

EC2는 Elastic Compute Cloud의 약자로, 아마존 웹서비스에서 제공하는 클라우드 컴퓨팅 서비스이다. 사용자는 이를 통해 가상의 컴퓨터를 "빌리게" 된다. 이 빌린 가상의 컴퓨터를 '인스턴스'라고 부른다.

## 비용과 사용법

EC2의 가장 큰 장점 중 하나는 유연한 비용 체계이다. 사용자는 사용한 만큼만 비용을 지불하며, 이는 마치 PC방을 이용하는 것과 비슷하다. 후불제 방식으로, 사용한 시간에 따라 계산되는 비용이 청구된다. 또한, EC2 인스턴스를 시작하고 구성하는 데 필요한 시간은 대략 5분 이내로 매우 빠르다.

## AMI와 인스턴스

- **AMI (Amazon Machine Image)**: AMI는 소프트웨어 구성(운영체제, 어플리케이션 서버, 추가적인 소프트웨어)이 포함된 템플릿(틀)이다. 사용자는 이 AMI를 통해 필요한 용도에 따라 다양한 운영체제 및 설정을 선택하여 인스턴스를 시작할 수 있다.
- **인스턴스**: AWS에서 "컴퓨터를 빌리는 것"을 인스턴스라고 부른다. 선택한 AMI를 토대로 인스턴스가 구성되며, 가장 기본적인 사용 사례로는 웹서버를 설치하여 사용자의 웹 브라우저 요청을 처리하는 서비스를 제공하는 것이다.

EC2를 사용함으로써, 기업이나 개인 개발자는 물리적인 하드웨어를 구매하고 유지보수하는 데 드는 비용과 시간을 절약하며, 빠르게 서비스를 배포하고 확장할 수 있다.