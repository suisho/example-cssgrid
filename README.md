# Installation対決
### neat

```
gem install bourbon
gem install neat
bourbon install
neat install
```

### susy

http://susydocs.oddbird.net/en/latest/install/

単体でのインストールするならgithubからzipか。npmからコピーか？

### 結論
neatの圧勝

### gallery


### swap
左右入れ替えに関してはやりやすい。毎回lastを気にしなければいけないのが逆手に取れる。

```これを...css
.two{
  @include container();
  .side{
    @include span(4);
  }
  .main{
    @include span(8 last);
  }
}
```

```こうじゃ！.css
.two{
  @include container();
  .side{
    @include span(4 last);
  }
  .main{
    @include span(8);
  }
}
```

# Profound grid


# stats
||star||
|susy|2369||
|neat|2619||