//
//  ViewControllerManager.swift
//  SDGWallet
//
//  Created by Nguyễn Nhật Long on 14/08/2021.
//

import Foundation
import UIKit

@objc(ViewControllerManager)
class ViewControllerManager: RCTViewManager {

    /*
    // Only override draw() if you perform custom drawing.
    // An empty implementation adversely affects performance during animation.
    override func draw(_ rect: CGRect) {
        // Drawing code
    }
    */
  override func view() -> UIView! {
//      let label = UILabel()
//      label.text = "Swift Counter"
//      label.textAlignment = .center
//      return label
    return CounterView()

  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  // 1
    @objc func updateFromManager(_ node: NSNumber, count: NSNumber) {
      
      DispatchQueue.main.async {                                // 2
        let component = self.bridge.uiManager.view(             // 3
          forReactTag: node                                     // 4
        ) as! CounterView                                       // 5
        component.update(value: count)                          // 6
      }
    }
}
