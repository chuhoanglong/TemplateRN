//
//  MyCustomView.swift
//  SDGWallet
//
//  Created by Nguyễn Nhật Long on 07/08/2021.
//

import UIKit

class MyCustomView: UIView {

    /*
    // Only override draw() if you perform custom drawing.
    // An empty implementation adversely affects performance during animation.
    override func draw(_ rect: CGRect) {
        // Drawing code
    }
    */
  override init(frame: CGRect) {
      super.init(frame: frame)
      setupView()
    }
   
    required init?(coder aDecoder: NSCoder) {
      super.init(coder: aDecoder)
      setupView()
    }
   
   private func setupView() {
      // in here you can configure your view
    self.backgroundColor = self.status ? .green : .red
     
    self.isUserInteractionEnabled = true
   }
  
    @objc var status = false {
        didSet {
            self.setupView()
        }
    }
  
  @objc var onClick: RCTBubblingEventBlock?
   
  override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
      guard let onClick = self.onClick else { return }
   
      let params: [String : Any] = ["value1":"react demo","value2":1]
      onClick(params)
  }


}

@objc (RCTMyCustomViewManager)
class RCTMyCustomViewManager: RCTViewManager {
 
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
 
  @objc func clickMe(sender:UIButton!) {
    print("Button Clicked")
  }

  override func view() -> UIView! {
    let btn = UIButton(type: .custom) as UIButton
    btn.backgroundColor = .blue
    btn.setTitle("Button", for: .normal)
    btn.frame = CGRect(x: 100, y: 100, width: 200, height: 100)
    btn.addTarget(self, action: #selector(clickMe), for: .touchUpInside)

    return btn
  }
 
}
