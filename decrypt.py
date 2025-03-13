from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
from base64 import b64decode

def decrypt_aes_ecb(ciphertext_base64, key):
    ciphertext = b64decode(ciphertext_base64)
    cipher = AES.new(key, AES.MODE_ECB)
    decrypted = cipher.decrypt(ciphertext)
    return unpad(decrypted, AES.block_size).decode('utf-8')

# 根据你的密钥修正生成逻辑
def generate_aes_key():
    # 密钥片段（Base64编码）
    desKey1 = 'ND7TLBY9Cx/SdS0R/7dqmg=='
    desKey3 = 'ZXF3+Q3opQHlh6UkTFRVA=='
    desKey5 = '2dLxnqs81pKORjc2MlklrQ=='  # 反转后的desKey5

    # 固定解密密钥
    fixed_key = "sopthsk!#032IJDS".encode('utf-8')  # 直接使用你的密钥

    # 解密每个desKey得到片段
    part1 = decrypt_aes_ecb(desKey1, fixed_key)
    part2 = decrypt_aes_ecb(desKey3, fixed_key)
    part3 = decrypt_aes_ecb(desKey5, fixed_key)

    # 拼接最终密钥
    aes_key = (part1 + part2 + part3).encode('utf-8')
    return aes_key

# 主解密函数
def decrypt_string(s):
    aes_key = generate_aes_key()
    try:
        return decrypt_aes_ecb(s, aes_key)
    except Exception as e:
        return f"解密失败: {str(e)}"

# 示例
if __name__ == "__main__":
    encrypted_str = "输入你的Base64密文"
    decrypted = decrypt_string(encrypted_str)
    print("解密结果:", decrypted)