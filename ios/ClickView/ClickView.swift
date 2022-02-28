//
//  ClickView.swift
//  SDGWallet
//
//  Created by Nguyễn Nhật Long on 04/09/2021.
//

import Foundation
import UIKit

class ClickView: UIView {
  var likeAction: (() -> Void)?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.backgroundColor = .red
    setupView()
    setupContraints()
    addActions()
  }
  
  fileprivate func setupContentViewContraints() {
    contentView.translatesAutoresizingMaskIntoConstraints = false
    contentView.leftAnchor.constraint(equalTo: self.leftAnchor, constant: 10).isActive = true
    contentView.topAnchor.constraint(equalTo: self.safeAreaLayoutGuide.topAnchor, constant: -10).isActive = true
    contentView.rightAnchor.constraint(equalTo: self.rightAnchor, constant: -10).isActive = true
    contentView.bottomAnchor.constraint(equalTo: self.centerYAnchor, constant: 0).isActive = true
  }
  
  fileprivate func setupLikeButtonConstraints() {
    likeButton.translatesAutoresizingMaskIntoConstraints = false
    likeButton.leftAnchor.constraint(equalTo: contentView.leftAnchor, constant: 10).isActive = true
    likeButton.topAnchor.constraint(equalTo: contentView.safeAreaLayoutGuide.topAnchor, constant: -10).isActive = true
  }
  
  func setupContraints() {
    self.translatesAutoresizingMaskIntoConstraints = false
    setupContentViewContraints()
//    setupLikeButtonConstraints()
    
  }
  
  @objc func onLikeButton() {
    likeAction?()
  }
  
  func addActions() {
    likeButton.addTarget(self, action: #selector(self.onLikeButton), for: .touchUpInside)
  }
  
  func setupView() {
    self.addSubview(contentView)
    self.addSubview(likeButton)
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  

  let contentView: UIView = {
    let view = UIView(frame: CGRect(x: 0, y: 0, width: 100, height: 100))
    view.layer.borderWidth = 1.0
    view.layer.borderColor = UIColor.lightGray.cgColor
    return view
  }()
  
  let likeButton: UIButton = {
    let button = UIButton(type: .system)
    button.setTitle("Like", for: .normal)
    return button
  }()
}
