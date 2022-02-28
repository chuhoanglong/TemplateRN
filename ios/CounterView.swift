//
//  CounterView.swift
//  SDGWallet
//
//  Created by Nguyễn Nhật Long on 08/08/2021.
//

import UIKit

class CounterView: UIView {
  @objc var count: NSNumber = 0 {
      didSet {
        button.setTitle(String(describing: count), for: .normal)
      }
  }
  
//  @objc func setCount(_ val: NSNumber) {
//    count = val
//  }
  @objc func update(value: NSNumber) {
    count = value
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.addSubview(button)
    increment()
  }
  
  required init?(coder aDecoder: NSCoder) {
     fatalError("init(coder:) has not been implemented")
  }
  
  @objc var onUpdate: RCTDirectEventBlock?
  
  @objc func sendUpdate(_ gesture: UILongPressGestureRecognizer) {
    if gesture.state == .began {
      if onUpdate != nil {
        onUpdate!(["count": count])
      }
    }
  }
  
  lazy var button: UIButton = {
     let b = UIButton.init(type: UIButton.ButtonType.system)
     b.titleLabel?.font = UIFont.systemFont(ofSize: 50)
     b.autoresizingMask = [.flexibleWidth, .flexibleHeight]
     b.addTarget(
       self,
       action: #selector(increment),
       for: .touchUpInside
     )
    
    let longPress = UILongPressGestureRecognizer(
          target: self,
          action: #selector(sendUpdate(_:))
        )
        b.addGestureRecognizer(longPress)
    
     return b
   }()
  
   @objc func increment() {
    count = count.intValue + 1 as NSNumber
   }

}
