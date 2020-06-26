import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.turn = props;
    this.zturn = document.getElementById(`${props.id}`);
    this.X = 0;
    this.zturnitem = this.zturn.children;
    this.num_li = this.zturnitem.length
    this.zturnPy = props.Awidth / (this.num_li - 1)
    this.init();
    this.turn_()
  }

  init = () => {
    let _self = this;
    Array.from(this.zturnitem).forEach((item, index) => {
      let rt = 1;
      let res_is = (index - _self.X);

      if (res_is > _self.num_li / 2 ||
        res_is < 0 &&
        res_is > (-_self.num_li / 2)) {
        rt = -1;
      }

      let i = Math.abs(res_is);
      if (i > _self.num_li / 2) {
        i = parseInt(_self.X) + parseInt(_self.num_li) - index
        // console.log("i="+i);
      }
      if (res_is < (-_self.num_li / 2)) {
        i = _self.num_li + index - _self.X
        // console.log("i="+i);
      }


      item.style.position = 'absolute';
      item.style.left = '50%';
      item.style.marginLeft = -_self.turn.width / 2 + _self.zturnPy * rt * i + 'px';
      item.style.zIndex = _self.num_li - i;
      item.style.opacity = Math.pow(_self.turn.opacity, i);
      item.style.transform = `scale(${Math.pow(_self.turn.scale, i)})`

      // console.log(' item.style', item.style);
      item.setAttribute("data_n", index);
    })
  }

  turn_ = () => {
    let _self = this;
    Array.from(this.zturnitem).forEach((item) => {
      item.addEventListener('click', function () {
        _self.X = this.getAttribute('data_n')
        _self.init()
      })
    })
  }
}
