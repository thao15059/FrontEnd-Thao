### t = x + y: Thời điểm Mà viền dưới màn hình vừa chạm viền trên của vật thể
  - t = Khoảng cách từ viền trên phần tử so với viền trên body
  - x = Khoảng cách từ viền trên viewport so với viền trên body (scrollY)
  - y = Chiều cao màn hình

  - t -> cố định
  - y -> cố định
  - x thay đổi 

  #### Nếu x tăng:
    - Màn hình scroll xuống
    - Người dùng bắt đầu nhìn thấy vật thể 
    - (t) = x + (y)
    - Nếu x tăng biểu thức sẽ thành
    - (t) <= x| + (y)
    -  x  >= t - y
    

  #### Nếu x giảm:
    - Màn hình scroll lên
    - Người dùng ra xa khỏi vật thể
    -> Không xét trường hợp này (Vì mong đợi là nhìn thấy vật thể chứ k phải ra xa)


### t + z = x: Thời điểm Mà viền trên màn hình vừa chạm viến dưới vật thể
  - t = Khoảng cách từ viền trên phần tử so với viền trên body
  - z = Chiều cao của vật thể
  - x = Khoảng cách từ viền trên viewport so với viền trên body (scrollY)

  - t -> cố định
  - z -> cố định
  - x thay đổi

  #### Nếu x tăng:  
    - Màn hình scroll xuống
    - Người dùng ra xa khỏi vật thể
    -> Không xét trường hợp này (Vì mong đợi là nhìn thấy vật thể chứ k phải ra xa)

  #### Nếu x giảm:
    - Màn hình scroll lên
    - Người dùng bắt đầu nhìn thấy vật thể 
    - (t) + (z) = x
    - Nếu x giảm biểu thức sẽ thành:
    - (t) + (z) >= x|
    -  x <= t + z

### Từ hai công thức phía trên
  x  >= t - y && x <= t + z (dfcm)