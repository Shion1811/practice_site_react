//import = モジュール
import { Tab, Tabs, Box, Typography, AppBar } from "@mui/material";
import { useState } from "react";
import { Image } from "./Image";
import { Modal } from "./Modal";
import { BrowserRouter, Route } from "react-router-dom";
import { ImagePage } from "./ImagePage";
import { useHistory } from "react-router-dom";
import groupBy from "just-group-by";

//imagePageDataの名前が分からない　定数なのか変数なのか
export const imagePageData = [
  {
    left: "https://lh3.googleusercontent.com/p9FeAwPp5gPcqSnLuz4m9ylgh3icztO1kOWg6nXy0sf1ZkmXJUddhyqwaxYTnvM41rNIlLRtVRy3d9UPXdPs_y0F8VlZKTVhnjPD_xGG9-LgvF5zgMI7PyLxeK6i9c6JkGBMemryQK-OaXS249PqvJmSz8tLIW8_bHyVKIgeSZMp9v35vAf23I-mK653TbN-_SeE463VXXldy1Ovciz-yJpXPr0zspuY9FiDHj_woHDRxBWlKLLh4Y16s2OLM17Hc9aPUhkarczm6WclkAQpQ6Bxzd7bTtZajO-hvUhcTYTrZLEfB0m5sYga19cMPvOJZlcR5wsiPe8uO-DWVma7sbLSZVcPuBd2r14mGBuApa8ZVKE8VQhp3rxlkg7O_CMD4wQRtrM-LP_q_wvcJOYIn2isYzXnskdVWJcmB1TI4IhNUZkIKMMiyCwvhMfSiATITQT4aL4CzWbSsuLZE_k6Y-fkQjiwydx54njhRusl89zRdSJKq63JMnf6y97XVcQLkfyGVdjjeliE7q_iypXYzdHEcBzR8SNvUe254oK9djhvqdAWIQjck2ieeOATrsMLbo0YsKqssNfKySFGq0X4Ez5FWuAYZsQcteUce_n2rI4v0xfSc1CSaEWM1PwrqjcqShdxs3A3eWCrxAVA3mF_F-hDlSJzKMx4awEVDXR7vxZYXljo8xOqRmeXNBdnDZqqBtx3gyzislSrzasbqwujxzbAkfN83BZbo8SXWH8GAHf_zGbs2mGt9GFdDLiO0EqX-I_oMn9k270fWwlJsG10rt-N191hpvqw17PQvNOHXIC6jiMMmaXx6wK9rlBTGOvQfRgWm2OL-3kme1I90sddHpiE9OYpRPQmBdWkyCOKt-JyNbjYaUNBxBU094AX852gUEQvbkfvlTm4sVrYQsFSbkMxZW9XO-BG4dtt0L__wut31a60uu6bFGUWFdpVBcBLGVmHh_DCl_PFMRFQUJJg0Q=w1454-h1938-no?authuser=0",
    right: [
      "https://lh3.googleusercontent.com/JDqbjzu_jHoShnuMNX_uI-wQI4x00y7h_chUUeZam8HIFT8Hp7az8vI6lo4MAsDNN9VtuAOHX0jA1wPkEeiyzQniq5myvsly2lQs7fHILU8R0eqjs7PqPjvxA5cUsiDi77hYCIJMt3pYgNPuyecEVPsSVMwIvpt3gxf5n6N5RLvl2RtlS6YEqYCm-INZOTKl9F7dMNsRHp_ogE8yuhFSSuRfPR8BvWRc1R_VmqJ7cKk0f6GgCdL2xm-4ilNEap4o5vHp9sYQK1cSqvHMe_yM4eAyACuLmcBSF2UEj3vJC7fjGypw_W8k9IgWY72vv3YQwHJbObbUG5MSGGkRjQCnx9ePAA69LZUc0oUKF9rsDutXEc25KQVuKs1I9IB92C0LWVMFhfTF_DWee6p73Of8RY9Z9QTTivpwWq7eW2UuoeJKtAdVK6U_3bPecUsjTzOFnXqWUNLiKH9wmTp9BxdToI-pV4k-1rufZCoa_NQ-TcTWvniFrZJpL4DHr9TF9fUj9xr6GluRGblEByIIEf77MXhlLhgqAuebJnrT1c5WOpkYcayQO0RAvCvNOdkaB4ZQAZpirRbObT52Mg0_BCN-exXzK130PkH0GzpFo12Up96ZmE5v7iYNzOStoEKrt_g75UoP_B3nGu93r0Zs_YasCM6lgqzsdO_zDZWxCFdrou_hvGx18vh1i-OMWYpNxSVL65WTyM_mOHISWOBSwQh-6V888UmxzTOtws49T1zFCKUtK66r-6U2IQh_AQ4bx8R4Blw1HcForkbWJgZ0Avdp0ocMfxn31YCBW63W7AsoGNiXLsJh-G-IPtHYgAMRhbKJiS6EKnHmSdrLwN2zF4i7_kqbYqFG88oBaGLunXG--ilD6wTYJ2yAZROCaT9gZfjw-yx8TJfVo5bSAARUrYhVIPVBmY_C_TqgdHxzk6siXtVW25mrmYcKi7ykmeQ01JvARdst6ih07gOBjg_J512L=w174-h232-no?authuser=0",
    ],
  },
  {
    left: "https://lh3.googleusercontent.com/RDrk-aVjwXW2HaFFIaYsJzqOTUjhxi8CHxLCo5_Kl5RNmdB4Lk05zYq_Cm83U6FXTy3bBaNkoXiDoDypTwGm1l_LCYwN0ndjnc5j5xHpYtnZ6ox6tI2KRk18NqWsNVpVFoMFJcfyMS6VDiufyspCnhA_EFQKPDygNioL0lxqai7Nyov3mmGF_tudCFCvvCUCgCgBa2PMeXS8W6bq1N7jh54h5FeywUDAZOyAAwFDqnomBHSkaJsPFY08W1mAvf07qg0XUX4lm6X3LKx3UUQ0zm5I9RM8pwJOIZD6moUk1am7W5ve7rDv47nWdNFGPxlQaol7Ll1_W6vilvOSwaAv9e7ileObgF747ExHuDiMrBE3BmUCTuTHash4CRYKm2jAfFtDUsV_Os-ql3J-yLtjJSmo89jqQXZFII_uescVVMhux-MfRnvNBJcT9P_fqYoXmbTdxRvBgHlZkmDYT5BSIdk2LvzH7G-uG245_j0siDbdB-dyGGBtoK_Ax0-Pz8A4R3fWrZEy0vPi5M3mpbcxppg3mOzp9AfdKqVuTFY83sh3zD8NZmXY1fm1pmvMcdkS5ywuHYyRvjgUKdfQG0MQP2wjz0JWBdhpq2UDjoMDPVwbQNGkO9o_84MdFqrTOUi7kaRgteTBZxdGkQd4kN6cZHndlNEvg9OrF_A4_AnFS83Mj0GrjPQVWDSUlBz1UoxZQ30Hx8jQSYyu-Os-cmVbUCPLoubVJ8PMgMpSRhEF-qiZMEe8UronUbSp5Ba4y-WcZGhRQPRcP1i8ZskQ-rSeAbU6qXiVEagHAPOOIhZAUHPQ2M3hYcuxwW_-Ylh9Dfk0gmmVXjl7fgI4W_qLfgLTevpN_CWXWtUQdLlC1gDoaiT_RyS_OgJ0gTC0vRqCGxpnYy_3qS_VTtGyyWeBKYMre8wwObpI1GPhMxoE8icbMQUZvuxsrB6vWTWdpJP0uXYjDeps_K8Goe9NJ2GzZx_q5g=w1454-h1938-no?authuser=0",
    right: [
      "https://lh3.googleusercontent.com/SqGwnn2Nc1Tx_13uzE5HyFNFe6Qxc8V_kLSZkR7zB_CWIZqEtSzIqNRUa1x0gw_YcU7HK3nkkJwvoagQ2P61FYNokN6Bi3pbhU4uzSPDPhNN2x8fGFN2TTwuMJmupShN-CWxs1LL8WzdymfqTbREV1TzD16ZkkxI9vy8zatv6bCVTMrItF6VbO0g8yLixcSYSMcV_a7KZDFr9AKWQd7I0ePtx-QyprkFztyy8FoanEZeV3tOzA0NUUbF62uYoVxC2YJ1yT2qxzo-Di1g9KtXStuFyPVCNflAiW1OxxU03SVrJ4_5P8O1KZ2u2-jiX-6dtvSk_x8Rb7HlE_KYAJ50mMaPmCp4OCm84ANlQPx5Omv2rS6OJL7poIFXN4FSO6dbR2CD5GOnuzaPzTAkWqiwz_10hXC814fOPu_VULOsmvdUpd1MXbuzNRPaA_j55C5fHieUsa-HYjMQ1JY3Xq4HqSpMuWQdSHfVjT23B-6LmOdycWHqgAHrV1Z6ywI-e4vYLoM6Awl5AsQ2LcMI5pmKPRRfzSKwrC0MTHkGpOan4aWzS355V6LyBbDybH4y62AKPdv-LTxm8CGnRvlZcpbFm1KW6H5BdMx8-XY9MNPAR6wgHnnbWN7vJfrbOPxBkrDbu5UZoP1dFUgA-FmZ9Htzi_cJ8Hk0JtHPBEsnAwlbE6S9_HC_eBcEgh-Csafcz_StjkLj0N4wqBvbupPf5B7nTjtWEmrpAZIyGJ1DMI7FYgKvhUWzCX19BH85zkqJfsHkokPLtkoxWZr9ajwSLuPIPme7FKYRS0186OndKDlL2SJ5uYA6fUQY_m-m2Txq9eBytNN-1n1Cj9bsoS-dPC8gy2F37T8Kt-VKORISYjPq7yBYgm9SFwQ4is46ZoibZVzS_jOYTdCRW8Zib8wLV885E-1qyKydxN_TD4uCz8p74KeUAPZiaoUdgPPD89Z21ns5Himq6CVGaOH5RlfH3SYnMQ=w1454-h1938-no?authuser=0",
      "https://lh3.googleusercontent.com/pyF16n8iuGuLZ0QcM3qPiDc1wNQfPIqNfJQAhwgK5qT0fFUyskWgMrgY8sN9IUohafqVFkIL75vl4Um0XGf1SuIuM8ChtXi8dU8wFp5w-JoRzOIF1Z9GWT-_RpZhngZI0vlzi-aBrxB_vDjzwcLb3RHAI43dd8YPdPcO5nDI39tziRNZlPS7ipd0A4dURGBDqP2jVOzQmrYYYF9yp_7lUqthbWn8SFI51BXmq85x99izKXD_jvRVYONO-9ZZdCP7Ie1hFaKKprSe9A7uotl6mtVc1IP3_76nU0hlvRU7JGPBnIlOVl1PzRHZihPq_A-RtUV4EJdyU_D-RSleKMTNDWGy3lZPzJVUee-A5F8bsleDp5SvaowPEr22Cz08kngkkffOuE8mTGVuxC_LHvTzhWmImyyZu3uVnUCxaF29j2bhytye6u6wZq8u82MK8TuFafJ_kZUMXpqz4ucEy7ERKxTXAo58qNkpplA1IA9X7aS1KINOccvxHJLke2KWNKbm_2wqUhiCj2AdsazAHSLAjqZGirnAmXx5b6Ags53Uvi_LaCc47RQgdLYABDuMVi61iN2M-w3s2HwxqCY5D2GX5JqDtqEkx0smthHkAKZ_cgn_OHuUXpSsk51gK0ndMED1ly3-u89UAd0ogr1JDV-baFpKwpr3WJEsZm15g9z58KBn8kVjKe06bnEA-7PIa_gByizm6OHtlvflOEeQETmqIQt0ajiI6mLURt4hhOeJxTm7QINGfs02qTY2_I5_Js98SgordHTKNommqGzm6XAS7vnivyFOXqf9IBkKQLFq0h55l_rdEXZguxfj7jE8F31SvpzVqW1gZkvo1iAlkkkpgA5hsts3R35HEpXuUv-QrTYfCBS0w9QDSLKQcRKBNDp1Kg2AkBQIdcTPhOKDwFFovdy_fwUW4WhU1B3HijLPv5tQEjij0sOVFHdBta11Bv6DGLzEtYeO0olQFXQZJH0Lnw=w1454-h1938-no?authuser=0",
      "https://lh3.googleusercontent.com/nMRCrvFn5N0QWB4SYhXxPCHVDdBl2OQiZOtJj_EBjSYzO8KAhOBgHGXCG6HdtTf4peCLfADs9FN2LKLkyxZeO3ctschbuLkKxj4X_R_4VYZA28833RRc0OpcwlurYyvcnb1WK8wVjDd6zRQDf4Cmt0goQs433BANb_DJxWnsyV6Q_umJL7pM4COEu5QkR7bAdAA3sgm9vyteN2HlIC0Ylb7xmvsCbyxKl63Vcfe3EB7GXQyREx1VM86mEBmuEFAlj_6Ue5wQte8zIf5OtdhW-Wl4jIYAzk3hmkpGrwzk8uxhVu6AuhnuQMyhJQpcBSfGPuin0TYSXXqoVYJ4931hfVTRb0bIncKg8k_vO5OeRnYbW_MzHKByDk7lue6BBMtWwwvyOQF0aITmDh-xfi-5jv6MPA9BhPxqconuuwWYGkHdOz6qvEosqGKkYy2nNFV1zHt94SCfA3EUQC42_45zfian9wZ3fZGxLou1cmexw_c0FWeDwG8doTY8TGr0_jOCSTEJyFX9JlxhIKBFwcFHrd_35mN1HbxSQSTyqQXsCahxevoik6rtrEgutGrCNNWYvstYFpdjwvO1vEbv-bVT7pxhxNhmCllv52Hfo7aI8vbjyJLtKGcWpG7i_qiPiVdo7B6YiuTg6ECReCsTdudNKFRj5QD5anw447yWQOYm80IUYLpoGFkf6MtlAunHaAVeU68_PUJ6DckvXEeb5xM-8I08s4yi3P1A5AsZBstJ2Q4qpOA0iIi-gc7P7AwBfLV899ne8jOxxmJ5NEAyxZnVkHygnKGWNuT_1uyq1K6gMbxrH9Xvn29I_rMFSc_WpH7H24lizibYpAeeVJLm7yGZif-7xaOSp2kBzOygaPZEH9-qf550klQzLcmdV0CvMxuEzs9OTkgPa_l6DWfEJ5xu-D54uQhERWhbPdqQjAwqdLjbrV5CSUOYO_s1Jf9zVgvsgz99AjdDJ1z-U62stRWnag=w173-h231-no?authuser=0",
      "https://lh3.googleusercontent.com/Cvuob1LSoyD4znruvjcAiqddAgH456xyi7NMmhzsyZDgkK0uHNcrXRDHFc6wKOaveO_VoumYOTcNSp5ihqTJXlu59oyHKXwJkyr8eBNASizDAmdvwMxwp31eT0JwGFwF3z0Yh8IEem4c64YYCbYtfYxeRBv23EgUc5zsvC2YTkTH7hb2RxjaYTIYX0RXfMncJ5AwuaOY-qH0fGj8pv54KreL5R2WA8hDFlONP0nxru2xf9a5K6VlX1zTLUSE6cGUbynSDdJEGOk4LAvo63ZZ0ug-62ecJYGC_iMIwoXJ_3DWMS3T91FGqrcMHMiH04ndY8j8EIsDh3bMmjmeQkNAWSbb9OSCm9NSg4kLvF5jBhqxxx7idHGSt9FUHg6SzIWu2agm00NDluB2ZBvf-0hzGjeH-hKOQXquMoVrLJwkWrx1_wjCLxlVtNkFqjba8r6aOMK046ZOhBBcB-qs9CifWEuQMd8vaEgJ-oYxAEwZ1aWjx9yrYK-63I9sSObb86M6q35eAbM4Ns1Wq5SjGPAywQy9cPfPLCyAo-n2mI-7GGuT1xUYLvdRySPM7unNuTcR60YpyGRAOLwvtCbs7YIqXbwl64U0jWmbM6wy2NT6NuiUdkWLWkYk80goPQtAutGJecerR6IDI4r3bjUX3MElo4NrlG86mf_WTzvSS0JBEKrClm6ZAWOgovhQJUXSoFeat-YQ12dbl7FiYOqveNmU_G4Im7D94RcLHwXuri3PhACSVjzVFJg7FUQ6ZcJPUGyk13ruZQQ0sBOxe5ksRNY1WLhuym0m52nwc7Fqhn3c8PKh--FRpy4r4O2rUB9cXnCq16rwDR6KRwEDkacdyTBcSw6h24yweKrnEXbyj-ySRxfjJLU_BeTkB42yR3In7q5uLMFcH2QdxUPzczgcnNPaG87YgD6AsYeyJqIxCNsguohsGsFetT34-ocVte-G7xAsEafgvIdHgj3L4dTZ9x3VYQ=w1454-h1938-no?authuser=0",
    ],
  },
  {
    left: "https://lh3.googleusercontent.com/g9ibB6tvVsNnQgCTdyn7Rt67-KujWEsp5Ahzv2B100UC4Ln5GQswV8KTnVRxHlmVu1vup_AWG8aefo_zJ-rTDz3ffJCSfRopWYtQGCnJcRBDmob4p06umTf9z7BnCpBGAEH3A0A055Xv8qSOeHPm0a0BY0ZhUKYm4ElbDfZHClYa7BeB5Qd8I-J1OeHs0K2oVtUNHtald3TfamIGgl6Zi7Yg3v1ypkibbqdcMvYGufqwAelG7oiuo3lhkgw3XZIc7713FNQhhbhhhqKm_r_wg7lhGdofDR9WsYgS--s5A7mezlQmshMrK2wNF3SlvsB8c3EzaviHaPsded61jy7Y_5oVdBdd5OLQB0J_G5pRlt4g0Uw7bH9llXI2_2CSAPL7MOIB30Z4ZASGQghHx9aWLb_5DOkhB3Ym2k3KlgNWYrmYUS_caRbQj2laiS3zZcf6kUlIZTBs0sXJ9BReTgcYBVEMSqO2vLJdUoh2FTYvI9bG31nmklSo5HxUGay-ilEmEXeap2iCfo4mFhVhw7s_u8gNTs05KHGoJ7M5qnu2c7BXWuJj5jWuRe6mby8qXBZMupie7HpulC-SF4GdgHxP5kB_QGvvV3Wordplf9PyVwBwMai8aykklYWoR_QHvwzhofTR0F9oWBUp9KMi_wumI0kqvQ75SsSO800CnKGGLYPCkA0U9P10nEDauY0LHqL5HLJEmLSORBmY2Kh6cXmnF2XaGaO1Daa1OiVSp-gcZL5EI55EpeSirzRmyLxgN_9MQuYtmv70U98KvMACTJ9-s8tK0IkEwiueXOlks8ID2gZjXa2jDCigZkjKuyJDnHnTD9SXY4wUfWyUVjg0SCUIbBGPtzWR-XHTQz1zZPH8KGwosQfmF07Sst_7aRC1lSDMQGRmdOW7RdxTAW8dHoAteaX0Ey5ejyh2R88LBMci4lASNzeQKoupzL8uVFa5wH9j4pknE1T7ad-amNMSffQygg=w1454-h1938-no?authuser=0",
    right: [
      "https://lh3.googleusercontent.com/3XhO4-Rq_K-8yzSXs3eIBNzm_FtTzy4ywnzBxAznxMOZHi7b24C0Fs7uPQvLoe9EWgijOAg8ojh5ijt4D6mKjhLjba15Vnf4cm36U4PwIpJNyl_UQ9HCoEueb9tvjNJtVR8S4JjVW1mhM3IG7SOmVNrOuSTZ0uc6uzh9XJmyAPMhxS8GQEvKQzDPjhLOG7zyjF9SFQPXuX2HV6On5zE-lhCJrRxrfKwuQ8HT93fzwFUvP_ml0H75zokWawCAnjoSAwY7mwZRnke05Khu-LnbXwXfyjUd8OVs7U7tGbsv4LJuZKvJzadoVewjJAvISZ0wQqG41JwBe0g7SeBeWARXF-q492XlLdFwos2dn9iKRWDBHW0Sl0a0EVLYE1GbvzuT751XuYYUvOBkiBdxBUMvzvFivBilp3NluvLzGNBZVud-mqAWfHlD9tg44PZ-BFCEFcHUy2JojSHLFY7utEZUUwgGMkFo8UtMMZiCzD9FnxFckoIUcxmVHTa8dCAWuiFdWp7Zqyqmtp0VB1P8OH0Ewkw4ZhjhpJ-3Gvpx_yVefj3tl6sTvDZaT21Vh5m9XEstWKuNmepNMEJ0IETDJJWIQ1WvGKrSbPw6J2qxdSMexSS9hisoiJ2-m-WsTofjM-S114aOQH7jyvf3rVDTlz0AkSEuFWtkM-CgUQnXwziIUAWu1xqCbkncN_XU-DuQ4T0TPPqgbt0AfkBQSwJidbnnPHmhF_gNLviElved4H4Wq66RquV1aaH0LxaBdh7hvin7sgW6THaqejl9gIYk7QescLUbrT56WxiGNu_3zOY5uA96G4hhJU6qGir75_2-QPY7mBjfz4NIL6sFvWw7xc8JFwsZq-rjZXPR3_Lf0IvPwwA0lzvWN0ntIKyR56mC1rynuBcrAyJ4CqLsQ3Gt9h42iHuhb1fgiUdvF1ziUQdJ84cOpVUdIhUUuzxKY055tXivBxu8cZ73ApaZ78P5hmd4ow=w1454-h1938-no?authuser=0",
      "https://lh3.googleusercontent.com/EAhQQaqrRXnyw6JvvbdNKPlWUFMQrPy_QSGKfWhzyTwDH-lHhaitZKaZqlkC4FzspGKMtWIzH03F-A0-Qzt--9do1FJzUirGwOqWckB08xhBeRbQFw_TtpOjR8pR47JGzv8xC_28mhdSnADSuzRsuF4ZZVAUml6MtWzSlnuwaueOzAGwEOu7bxAkSw1P9mXzI88sDxyChELDKVJq--aOjEXel5YUtuG1woLVDYf-QOMRT1opFDgo-7bxTVzns837-E2OHZywYzOGGvlyzO-q8LBbom5K77z3OxDLHVJD1hIc0lp1GU9n0Wo2RfEGecIN5xYzZ4Z56Iz101hPaNR8uCrWcGJOIYMieIq3X9JDLF0iPpCXNJLumlhnu9F5TQFJ1V5Hs9HfzuShwnGjFBtfs4ZhG-dGztZP8hl3n0msuRnt1lzgrlt2KufvJLa6SPUm7rb1pKosUzBrAhF1dXkVs2-MFR9Qy9nlBAc3HBtOJkIV8lxOWH-rD13oS7NtUZFNbUneseZJ-HJZKehDJYkWm3Hc6drysYSoikmFR0412UGnTJ0mTZsRPtU2TLG8FUjf3h0JuEuUbrtrI2ThqTcg6mSq4NXDnhNLq29uJUMj3uTjfvdpq5DySp5I7ABLT_NSt-hykIzMjwf7Pe5no7CBgpJPKlSMXqtx8tqL-z--erh03mljXTCJzgk8SJh8WM_ikrS6V4f3ZKr7JKxqb_7ICftukDZPNa7Lcwxp-X52k4gUMwYWax60FuH2Mbd4hCabq4s2FP3qnt8P9c1HXsW2tFPWOBMAM_qd438QH6-fYmBuMWEY29gA4eugV7EpRJVqP-fOYy0St10P2QDqPY-pttvHx06kI9UiyZGiTXlSqfUk9zI3eTmwrIzq9f9ZNVwFUaOEkUm2sHT5XP2v0KGG6TfoFjzgMv7Eo2d9WJK6CDAhJRlTjunGazxmuHmGsjUSBkV1jDMRbUO9GYdTvpjQ-Q=w165-h220-no?authuser=0",
      "https://lh3.googleusercontent.com/p9FeAwPp5gPcqSnLuz4m9ylgh3icztO1kOWg6nXy0sf1ZkmXJUddhyqwaxYTnvM41rNIlLRtVRy3d9UPXdPs_y0F8VlZKTVhnjPD_xGG9-LgvF5zgMI7PyLxeK6i9c6JkGBMemryQK-OaXS249PqvJmSz8tLIW8_bHyVKIgeSZMp9v35vAf23I-mK653TbN-_SeE463VXXldy1Ovciz-yJpXPr0zspuY9FiDHj_woHDRxBWlKLLh4Y16s2OLM17Hc9aPUhkarczm6WclkAQpQ6Bxzd7bTtZajO-hvUhcTYTrZLEfB0m5sYga19cMPvOJZlcR5wsiPe8uO-DWVma7sbLSZVcPuBd2r14mGBuApa8ZVKE8VQhp3rxlkg7O_CMD4wQRtrM-LP_q_wvcJOYIn2isYzXnskdVWJcmB1TI4IhNUZkIKMMiyCwvhMfSiATITQT4aL4CzWbSsuLZE_k6Y-fkQjiwydx54njhRusl89zRdSJKq63JMnf6y97XVcQLkfyGVdjjeliE7q_iypXYzdHEcBzR8SNvUe254oK9djhvqdAWIQjck2ieeOATrsMLbo0YsKqssNfKySFGq0X4Ez5FWuAYZsQcteUce_n2rI4v0xfSc1CSaEWM1PwrqjcqShdxs3A3eWCrxAVA3mF_F-hDlSJzKMx4awEVDXR7vxZYXljo8xOqRmeXNBdnDZqqBtx3gyzislSrzasbqwujxzbAkfN83BZbo8SXWH8GAHf_zGbs2mGt9GFdDLiO0EqX-I_oMn9k270fWwlJsG10rt-N191hpvqw17PQvNOHXIC6jiMMmaXx6wK9rlBTGOvQfRgWm2OL-3kme1I90sddHpiE9OYpRPQmBdWkyCOKt-JyNbjYaUNBxBU094AX852gUEQvbkfvlTm4sVrYQsFSbkMxZW9XO-BG4dtt0L__wut31a60uu6bFGUWFdpVBcBLGVmHh_DCl_PFMRFQUJJg0Q=w1454-h1938-no?authuser=0",
      "https://lh3.googleusercontent.com/JDqbjzu_jHoShnuMNX_uI-wQI4x00y7h_chUUeZam8HIFT8Hp7az8vI6lo4MAsDNN9VtuAOHX0jA1wPkEeiyzQniq5myvsly2lQs7fHILU8R0eqjs7PqPjvxA5cUsiDi77hYCIJMt3pYgNPuyecEVPsSVMwIvpt3gxf5n6N5RLvl2RtlS6YEqYCm-INZOTKl9F7dMNsRHp_ogE8yuhFSSuRfPR8BvWRc1R_VmqJ7cKk0f6GgCdL2xm-4ilNEap4o5vHp9sYQK1cSqvHMe_yM4eAyACuLmcBSF2UEj3vJC7fjGypw_W8k9IgWY72vv3YQwHJbObbUG5MSGGkRjQCnx9ePAA69LZUc0oUKF9rsDutXEc25KQVuKs1I9IB92C0LWVMFhfTF_DWee6p73Of8RY9Z9QTTivpwWq7eW2UuoeJKtAdVK6U_3bPecUsjTzOFnXqWUNLiKH9wmTp9BxdToI-pV4k-1rufZCoa_NQ-TcTWvniFrZJpL4DHr9TF9fUj9xr6GluRGblEByIIEf77MXhlLhgqAuebJnrT1c5WOpkYcayQO0RAvCvNOdkaB4ZQAZpirRbObT52Mg0_BCN-exXzK130PkH0GzpFo12Up96ZmE5v7iYNzOStoEKrt_g75UoP_B3nGu93r0Zs_YasCM6lgqzsdO_zDZWxCFdrou_hvGx18vh1i-OMWYpNxSVL65WTyM_mOHISWOBSwQh-6V888UmxzTOtws49T1zFCKUtK66r-6U2IQh_AQ4bx8R4Blw1HcForkbWJgZ0Avdp0ocMfxn31YCBW63W7AsoGNiXLsJh-G-IPtHYgAMRhbKJiS6EKnHmSdrLwN2zF4i7_kqbYqFG88oBaGLunXG--ilD6wTYJ2yAZROCaT9gZfjw-yx8TJfVo5bSAARUrYhVIPVBmY_C_TqgdHxzk6siXtVW25mrmYcKi7ykmeQ01JvARdst6ih07gOBjg_J512L=w174-h232-no?authuser=0",
    ],
  },
];
//functionで関数宣言行ってる
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
export const App = () => {
  //フック
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);
  const history = useHistory();
  //その他のコード
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    return;
  };
  const imagePathContext = require.context(
    "../public/images/bird_jpg",
    true,
    /\.JPG$/
  );
  //写真日付表示
  const imageItems = imagePathContext.keys().map((imagePath) => ({
    path: imagePath,
    url: imagePathContext(imagePath),
    date: imagePath.slice(2, 10),
  }));
  const groupedImageItems = groupBy(imageItems, (item) => item.date);

  //jsxをリターン
  return (
    <BrowserRouter>
      <Route path="/image/:pageNumber" component={ImagePage}></Route>
      <Route exact path="/">
        <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
          <Box
            sx={{
              width: "97vw",
              height: "97vh",
              overflow: "scroll",
              display: "block",
              position: "absolute",
              backgroundColor: "#EEE0CC",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              margin: "auto",
            }}
          >
            <AppBar sx={{ backgroundColor: "#AA7739" }}>
              <Typography
                sx={{
                  color: "white",
                  margin: "10px auto 4px auto",
                  fontSize: "25px",
                }}
              >
                趣味の部屋
              </Typography>
              <Box sx={{ color: "white" }}>
                <Tabs
                  TabIndicatorProps={{
                    sx: { backgroundColor: "white" },
                  }}
                  value={value}
                  onChange={handleChange}
                  centered
                  textColor="inherit"
                >
                  <Tab label="インコ" />
                  <Tab label="apple" />
                  <Tab label="SEKAI NO OWARI" />
                </Tabs>
              </Box>
            </AppBar>
            <Box sx={{ marginTop: "70px" }}>
              <TabPanel value={value} index={0}>
                {Object.keys(groupedImageItems)
                  .sort()
                  .map((date) => (
                    <Box key={date}>
                      {/* 日付け表示 */}
                      <Typography sx={{ textAlign: "left" }}>{date}</Typography>
                      <Box
                        sx={{
                          position: "relative",
                          height: 200,
                          margin: 8,
                        }}
                      >
                        {groupedImageItems[date].map((item, i, { length }) => (
                          <Box
                            sx={{
                              transform: `rotate(${i * -5}deg)`,
                              zIndex: length - i * 1,
                              position: "absolute",
                            }}
                            key={item.path}
                          >
                            <img
                              src={item.url}
                              alt={`インコの写真${i + 1}`}
                              width={200}
                              height={200}
                            />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
              </TabPanel>
              <TabPanel value={value} index={1}></TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>
          </Box>
        </Box>
        {show && <Modal closeHandler={setShow} />}
      </Route>
    </BrowserRouter>
  );
};

//const...定数の値が変更できない
