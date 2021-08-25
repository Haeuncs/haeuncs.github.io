---
title: "[Clean Code] 3.함수"
date: 2021-02-12 00:00:00
description: 클린 코드 읽고 정리하기
---

### 작게 만들어라!

가로 150자를 넘으면 안 되고, 함수는 20줄도 길다.

얼마나 짧아야 좋은가? 모든 함수가 2 ~ 4줄 각 함수가 이야기 하나를 표현하도록

**블록과 들여쓰기**

if 문/else 문/while문 등에 들어가는 블록은 한 줄 이어야 한다. 대개 거기서 함수를 호출한다.

블록 안에서 호출하는 함수의 이름을 적절히 짓는다면, 코드를 이해하기 쉬워진다.

중첩 구조가 생길만큼 함수가 커져서는 안된다. 함수에서 들여쓰기 수준은 1단이나 2단을 넘어서면 안 된다. 그래야 함수는 읽고 이해하기 쉬워진다.

### 한 가지만 해라

함수는 한 가지를 해야 한다. 그 한 가지를 잘 해야 한다. 그 한 가지만을 해야 한다.

지정된 함수 이름 아래에서 추상화 수준이 하나인 단계만 수행한다면 그 함수는 한 가지 작업만 한다.

함수가 한 가지만 하는지 판단하는 방법은 그 함수가 의미 있는 이름으로 다른 함수를 추출할 수 있다면 그 함수는 여러 작업을 하는 셈이다.

### 함수 당 추상화 수준은 하나로!

함수가 확실히 한 가지 작업만 하려면 함수 내 모든 문장의 추상화 수준이 동일해야 한다.

한 함수 내에 추상화 수준을 섞으면 코드를 읽는 사람이 헷갈린다. 특정 표현이 근본 개념인지 아니면 세부사항인지 구분하기 어렵다.

근본 개념과 세부사항을 뒤섞기 시작하면, 깨어진 창문처럼 사람들이 함수에 세부사항을 점점 더 추가한다.

### Switch 문

본질적으로 switch문은 N가지를 처리한다.

해결하기 위해서 switch 문을 추상 팩토리(Abstract factory)에 숨긴다. 상속 관계로 숨긴 후에 절대 다른 코드에 노출하지 않는다.

### 서술적인 이름을 사용하라!

함수가 작고 단순할수록 서술적인 이름을 고르기도 쉬워진다.

이름이 길어도 괜찮다. 길고 서술적인 이름이 짧고 어려운 이름보다 좋다. 길고 서술적인 이름이 서술적인 주석보다 좋다. 함수 이름을 정할 때는 여러 단어가 쉽게 읽히는 명명법은 사용한다. 그런 다음, 여러 단어를 사용해 함수 기능을 잘 표현하는 이름을 선택한다.

서술적인 이름은 설계가 뚜렷해지므로 코드를 개선하기 쉬워진다. 좋은 이름을 고른 후 리팩토링 하는 사례도 없지 안다.

### 함수 인수

이상적인 인수 개수는 0개, 다음 1, 그 다음2.... 4새 이상은 특별한 이유가 필요하며 특별한 이유가 있어도 사용해서는 안된다.

테스트 관점에서 봐도 인수는 어렵다. 갖가지 인수 조합으로 함수를 검증하는 테스트 케이스를 작성하는 것은 어렵다.

### 부수 효과를 일으키지 마라!

함수에서 한 가지를 하겠다고 약속하고 남몰래 다른짓을 하지 마라

### 명령과 조회를 분리하라!

```
public boolean set(String attribute, String value);
```

이 함수는 이름이 attribute인 속성을 찾아 값을 value로 설정한 후 성공하면 true, 실패하면 false를 반환한다.  그래서 다음과 같은 괴상한 코드가 나온다.

```
if (set("username", "unclebob"))
```

함수를 호출하는 코드만 봐서는 의미가 모호하다.

해결책은 명령과 조회를 분리해 혼란을 애초에 뿌리뽑는 방식이다.

```
if (attributeExists("username")) {
	setAttrubute("username", "unclebob");
}
```

### 함수를 어떻게 짜죠?

처음에는 길고 복잡하다. 들여쓰기 단계도 많고 중복된 루프도 많다. 인수 목록도 아주 길다. 이름은 즉흥적이고 코드는 중복된다. 그런 코드를 빠짐없이 단위 테스트 케이스를 만든다.

그런 다음 코드를 다듬고, 함수를 만들고, 이름을 바꾸고, 중복을 제거한다. 메서드를 줄이고 순서를 바꾼다. 때로는 전체 클래스를 쪼개기도 한다.

최종적으로는 위와 같은 규칙을 따르는 함수가 얻어진다.

### 결론

프로그래밍의 기술은 언제나 언어 설계의 기술이다. 대가 프로그래머는 시스템을 프로그램이 아니라 이야기로 여긴다. 프로그래밍 언어라는 수단을 사용해 더 풍부하고 좀 더 표현력이 강한 언어를 만들어 이야기로 풀어간다.

함수가 분명하고 정확한 언어로 깔끔하게 같이 맞아떨어져야 이야기를 풀어가기 쉽다.