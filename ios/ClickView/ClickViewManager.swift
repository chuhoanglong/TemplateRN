//
//  ClickViewManager.swift
//  SDGWallet
//
//  Created by Nguyễn Nhật Long on 04/09/2021.
//

import UIKit

@objc(ClickViewManager)
class ClickViewManager: RCTViewManager {
  
  override func view() -> UIView! {
    return ClickView()
    
  }
  
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
